let readlineSync = require('readline-sync')

let n = readlineSync.question("Digite n: ");
let div = 0;

for (let count = 1; count <= n; count++) {
  if (n % count == 0);
    div++
}
  if (div == 2) {
    console.log(n + " é primo!");
  } else {
    console.log(n + " não é primo!");
}