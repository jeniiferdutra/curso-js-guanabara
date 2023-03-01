let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // valores em ordem
valores.indexOf(7) // buscar o valor 
valores.indexOf(3) // se n tem o valor retorna o -1

/* 
for(let pos = 0; pos <= valores.length; pos++) {// jeito tradicional do percurso em vetores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) { //for otimizado p/ arrays e objetos
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

