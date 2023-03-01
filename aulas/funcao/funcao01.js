// Funções são ações executadas assim que são chamadas ou em decorrência de algum evento. Uma função pode receber parametros e retornar um resultado

function parimp(n) {
    if(n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

console.log(parimp(2))