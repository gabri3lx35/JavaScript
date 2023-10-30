let entrada = document.getElementById('entrada_num')
let tab = document.getElementById('seltab')
let lista = []

function Adicionar(){
    if(entrada.value.length == 0){
        window.alert('Digite um Numero')
    }else if(entrada.value > 100 || entrada.value < 0){
        window.alert('Nan')
    }else{  
            let n = Number(entrada.value)
            let item = document.createElement('option')
            item.text = ` Numero, ${n}` 
            item.value = `tab${n}`
            tab.appendChild(item) 
            lista.push(n)
            console.log(lista)      
    }
}

function Finalizar(){
    
}

