function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('resposta')
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
                //₢iança
            }else if (idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
            }else if(idade < 21){
                //jovem
            }else if (idade < 50){
                //adulto
            }else{
                //idoso
            }
        }
        res.innerHTML = `Genero, ${genero} e idade ${idade} anos: `
    }
}