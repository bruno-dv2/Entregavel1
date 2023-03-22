
let a = prompt("Digite o valor de a: ");
let b = prompt("Digite o valor de b: ");
let resto;

while(b != 0){
    resto = a % b;
    a = b;
    b = resto;
} 
document.write(a);

