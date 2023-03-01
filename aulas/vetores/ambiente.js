// Um array/vetor é uma variavel que tem varios elementos, cada elemento é composto pelo seu valor e por uma chave de identificação

let num = [5, 8, 2, 9, 3]
num[5] = 6 // acrescentar um valor
num.push(7) // coloca na última posuição
num.length // saber o comprimento da array
num.sort() // coloca os elementos em forma crescente

let pos= num.indexOf(8)

if(pos == -1) {
    console.log('Valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

