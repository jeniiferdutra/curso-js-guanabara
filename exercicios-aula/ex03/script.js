
function contar(){
    var i = document.querySelector('#ini')
    var f = document.querySelector('#f')
    var inc = document.querySelector('#pass')
    var res = document.querySelector('.msg')

    if(i.value.length == 0 || f.value.length == 0 || inc.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        var c = Number(i.value)
        var fi = Number(f.value)
        var cr = Number(inc.value)
        if(cr <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            cr = 1
        }

        if(c < fi){
            for(var cont = c; cont <= fi; cont += cr) {
            res.innerHTML += ` ${cont} \u{1F449}`
            }
        }  else {
            for(var cont = c; cont >= fi; cont -= cr) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3F3}`
    }
  
}