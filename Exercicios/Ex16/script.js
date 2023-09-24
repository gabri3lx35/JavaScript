function contar(){
    let i = document.getElementById('txti')
    let f = document.getElementById('txtf')
    let p = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(i.value.lenght == 0 || f.value.length == 0 || p.value.length == 0){
        res.innerHTML = 'Imporsivel Contar'
        window.alert('ERRO falta dados') 
    }else{
        res.innerHTML = 'Contando:'
       let iN = Number(i.value)
       let fN = Number(f.value)
       let pN = Number(p.value)
       if(pN == 0){
            alert('ERRO')
       }
       if(iN < fN){
            for(let x = iN; x <= fN; x += pN){
                res.innerHTML += `${x} \u{1F449} ,`
        }
       } else{
        for(let x = iN; x >= fN; x -= pN){
            res.innerHTML += `${x} \u{1F449} ,`
        }
       }
       res.innerHTML += `\u{1F52E}`
    }
}


