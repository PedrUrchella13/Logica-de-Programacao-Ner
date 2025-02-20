//----------------------------------Atividade---------------------------------
var dados = [1, 2, 3, 4, 5];
console.log(dados, "\n");

console.log("O terceiro elemento do array é:", dados[2], "\n");

var copia = dados.slice();
console.log("Copiando o vetor dados");
console.table(copia);

copia[0] = dados[0] * 2;
copia[1] = dados[1] * 2;
copia[2] = dados[2] * 2;
copia[3] = dados[3] * 2;
copia[4] = dados[4] * 2;
console.table(copia);

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matrix);

console.log(matrix[0][0], " | ", matrix[1][1]," | ", matrix[2][2]);
