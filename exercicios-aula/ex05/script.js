let num = document.querySelector('#num')
let res = document.querySelector('.res')
let lista = document.querySelector('#lista')
let vet = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}



function adicionar() {

    if(isNumero(num.value) && !inLista(num.value, valores)) {
        alert('Adicione valores antes de finalizar')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''
        vet = [n]
        if(vet.indexOf != -1) {
            res.innerHTML += `Valor ${n} adicionado`
        }
    }
}