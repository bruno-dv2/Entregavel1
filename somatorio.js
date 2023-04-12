let readlineSync = require('readline-sync')

let soma = readlineSync.question("Digite quantos numeros deseja somar: ")
let num;
let cont = 0;

for (let i = 0; i < soma; i++) {
num = Number(readlineSync.question("Entre com o numero: "));
cont += num;
}

console.log("A soma eh: " + cont);
