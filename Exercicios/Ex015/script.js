function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    let res = document.getElementById('resposta')
    let resposta01 = document.getElementById('resf')
    let resf = ''
   
    

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('{Erro} Verifique os dados e tente Novamente')
    }else{
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/CriancaHomem01.png')
            }else if (idade < 21){
                resf = 'Jovem'
            }else if(idade < 50){
                 resf = 'Adulto'
            }else{
                resf = 'Idoso'
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/CriancaMulher01.png')
            }else if(idade < 21){
                resf = 'Jovem'
            }else if (idade < 50){
                resf = 'Adulto'
            }else{
                resf = 'Idoso'
            }
        }
        res.innerHTML = `Genero, ${genero} e idade ${idade} anos: `
        res.appendChild(img)
        resposta01.innerHTML = resf
    
    }
}