function calcular(){
    var num = document.querySelector('#num')
    var resp = document.querySelector('#res')
    if(num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var tab = Number(num.value)
        var cont = 1
        resp.innerHTML = ''
        while(cont <= 10){
            var item = document.createElement('option')
            item.text = `${tab} x ${cont} = ${tab*cont}`
            resp.appendChild(item)
            cont ++
        }
    }
}
