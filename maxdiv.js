let readlineSync = require('readline-sync')

let a = readlineSync.question("Digite o valor de a: ");
let b = readlineSync.question("Digite o valor de b: ");
let resto;

while(b != 0){
    resto = a % b;
    a = b;
    b = resto;
} 
console.log(a);

