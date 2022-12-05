function carregar(){
    var msg = document.querySelector('#msg')
    var imagem = document.querySelector('.foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        imagem.innerHTML = '<img src ="img/manha.jpg">'
        document.body.style.background = '#D0BF92'
    } else if(hora >= 12 && hora < 18){
        imagem.innerHTML = '<img src="img/tarde.jpg">'
        document.body.style.background = '#A57662'
    } else {
        imagem.innerHTML = '<img src="img/noite.jpg">'
        document.body.style.background = '#464748'
    }
}