var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz.length; coluna++)
    if (coluna == linha) console.log(matriz[linha][coluna]);
}
//kisses from caittin
var x = 7
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz.length; coluna++)
    matriz[linha][coluna] *= x;

}
console.table(matriz);

for (let i = 1; i < 100; i+=2) {
  console.log("Números ímpares de 0 até 100:",i);
}

for (let i = 0; i < 100; i+=2) {
  console.log("Números pares de 0 até 100:",i);
}
