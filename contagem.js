
let n = prompt("Digite a quantidade de números: ");

let num;
let cont = 0;
let i = 0;

while(i < n){
    num = prompt("Digite seu número: ");

    if(num >= 0){
        cont += 1;
    }
    i += 1
}

document.write("A quantidade de números inteiros é: " + cont)