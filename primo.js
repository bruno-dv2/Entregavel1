
let n = prompt("Digite n: ");
let div = 0;

for (let count = 1; count <= n; count++) {
  if (n % count == 0);
    div++
}
  if (div == 2) {
    document.write(n + " é primo!");
  } else {
    document.write(n + " não é primo!");
}