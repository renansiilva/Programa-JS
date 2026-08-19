function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if(hora > 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manhã.png'
        document.body.style.background = '#dfd3a9'
    } else if(hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#fc8f3f'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#122a35'
    }
}