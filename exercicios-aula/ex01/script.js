function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#DEBA77'
    } else if(hora >= 12 && hora <= 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#D87F2D'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#404C5A'
    }
}