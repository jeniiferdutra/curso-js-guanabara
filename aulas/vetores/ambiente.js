let num = [5, 8, 2, 9, 3]
num.push(7)

console.log(num)
console.log(`O segundo valor do vetor é ${num[2]}`)

/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(num[pos])
}