let soma = prompt("Digite quantos número deseja somar: ")
let num;
let cont = 0;

for (let i = 0; i < soma; i++) {
num = Number(prompt("Entre com o numero: "));
cont += num;
}

document.write("A soma é: " + cont);
