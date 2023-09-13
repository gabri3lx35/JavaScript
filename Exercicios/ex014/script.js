function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'dedia.png'
        document.body.style.background = '#ecd27d'
    }else if (hora >= 12 && hora < 18){
        img.src = 'detarde.png'
        document.body.style.background = '#8f8050'
    }else{
        img.src = 'denoite.png'
        document.body.style.background = '#5f5548'
    }
}

