function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtAno')
    var res = document.querySelector('#res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
}   else {
        var fsex = document.querySelectorAll('radsex')
        var idade = ano - Number(fAno.value)
        var genero_masc = document.querySelector('#masc')
        var genero_femi = document.querySelector('#femi')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(genero_masc.checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'img/foto-bebe-m.png')
                res.innerHTML = `Detectamos um bebe com ${idade} anos`
            } else if(idade <= 21) {
                img.setAttribute('src', 'img/foto-jovem-m.png')
                res.innerHTML = `Detectamos um jovem com ${idade} anos`
            } else if(idade <= 50) {
                img.setAttribute('src', 'img/foto-adulto-m.png')
                res.innerHTML = `Detectamos um adulto com ${idade} anos`
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png')
                res.innerHTML = `Detectamos um idoso com ${idade} anos`
            }
        } else if(genero_femi.checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'img/foto-bebe-f.png')
                res.innerHTML = `Detectamos uma bebe com ${idade} anos`
            } else if(idade <= 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png')
                res.innerHTML = `Detectamos uma jovem com ${idade} anos`
            } else if(idade <= 50) {
                img.setAttribute('src', 'img/foto-adulto-f.png')
                res.innerHTML = `Detectamos uma adulta com ${idade} anos`
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png')
                res.innerHTML = `Detectamos uma idosa com ${idade} anos`
            }
        }
        res.style.textAlign = 'center'
        //res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}