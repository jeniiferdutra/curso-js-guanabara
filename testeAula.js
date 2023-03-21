function tab() {
    let num = document.querySelector('#tabuada')
    let res = document.querySelector('.res')

    if(num.value.length == 0) {
        alert('Digite um número válido')
    } else {
        let n = Number(num.value)
        let c = 1
        res.innerHTML = ''
        while(c <= 10) {
            res.innerHTML += `${n} x ${c} = ${n * c} <br>`
            c++
        }
    }
}