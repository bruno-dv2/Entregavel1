let readlineSync = require('readline-sync')

let n = readlineSync.question("Digite a quantidade de numeros: ");

let num;
let cont = 0;
let i = 0;

while(i < n){
    num = readlineSync.question("Digite seu numero: ");

    if(num >= 0){
        cont += 1;
    }
    i += 1
}

console.log("A quantidade de números inteiros eh: " + cont)