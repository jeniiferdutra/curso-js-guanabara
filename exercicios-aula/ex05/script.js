let num = document.querySelector('#txt1')
let lista = document.querySelector('#formulario')
let res = document.querySelector('#res')
let vetor = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Número inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(vetor.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        for(let pos in vetor) {
            soma += vetor[pos]
            if(vetor[pos] > maior) {
                maior = vetor[pos]
            }
            if(vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML +=`<p>O maior valor encontrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}