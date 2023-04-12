let readlineSync = require('readline-sync')

let termo = readlineSync.question("Informe o numero de termos: ");

let resp = 0;
let penultimo = 0, ultimo = 1;
let num;

console.log(penultimo + ", " + ultimo);

for (let i = 3; i <= termo; i++){
    num = penultimo + ultimo;
    console.log(" , " + num);
    penultimo = ultimo;
    ultimo = num;
}
