
let termo = prompt("Informe o número de termos: ");

let resp = 0;
let penultimo = 0, ultimo = 1;
let num;

document.write(penultimo + ", " + ultimo);

for (let i = 3; i <= termo; i++){
    num = penultimo + ultimo;
    document.write(", " + num);
    penultimo = ultimo;
    ultimo = num;
}
