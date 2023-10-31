let entrada = document.getElementById('entrada_num')
let tab = document.getElementById('seltab')
let lista = []

function isNumero(n){
 if(Number(n) >= 1 && Number(n) <= 100){
    return true
 }else{
    return false
 }
    
}

function inLista(n, l){
    if(lista.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}