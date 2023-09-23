function contar(){
    let i = document.getElementById('txti')
    let f = document.getElementById('txtf')
    let p = document.getElementById('txtp')

    let res = document.getElementById('res')

    if(i.value.lenght == 0 || f.value.lenght == 0 || p.value.lenght == 0){
        window.alert('ERRO falta dados')
    }else{
        alert('tudo certo')
    }
   
}


