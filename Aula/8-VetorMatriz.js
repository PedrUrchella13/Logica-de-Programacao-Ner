// Criando variaveis do tipo array (VETOR)
var numeros = [1, 2, 3, 4, 5];

console.log(numeros); // imprimindo os dados do array
console.table(numeros); // imprimindo os dados em forma de tabela
console.log(numeros[1]); //imprimindo item de índice 1
console.log("O vetor tem:", numeros.length, "elementos");

var dinos = [
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Titanossauro",
];

console.log(dinos);
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

dinos.push("Nigersaurus"); // Adiciona a um vetor existente no final

console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos");

dinos.unshift("Triceratóps"); // Adiciona um elemento no início do vetor
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos");

//Obtendo elementos com base em seu índice (posição)
console.log("1ª posisão:", dinos[0]);
console.log("3ª posição:", dinos[2]);
console.log("20ª posição:", dinos[19]); // Quando não temos um item, apresenta um item (undefined)

//Alterando elementos com base em seu índice (posição)
dinos[3] = "Velociraptor";
console.table(dinos);

//Removendo elementos do vetor
var dinos = [
  "Triceratóps",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
];
console.table(dinos);

dinos.pop(); // Tira o último
console.table(dinos);

dinos.shift(); // Remove o primeiro
console.table(dinos);

dinos.splice(1, 1); // Remove o elemento de índice 1 (A artir da posição 1, exclui 1 elemento)
console.table(dinos);

//Procurando o índice (posição) de elementos
var dinos = [
  "Triceratóps",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodactilo",
  "Espinossauro",
];

console.table(dinos);

var elementoProcurado = "Pterodactilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);

elementoProcurado = "Estegossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "esta no indice:", posicao);

elementoProcurado = "Nigersaurus";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "esta no indice:", posicao);
console.log(
  "IndexOf= -1 significa que o elemento não foi encontrado no vetor!"
);

// Excluindo um elemento com base no seu nome
var elementoExcluir = "Pterodactilo";
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao, 1);
console.table(dinos);

// Criando uma cópia de um array (vetor)
var copia = dinos.slice();
console.log("Copiando um vetor");
console.table(copia);

// Criando um array numérico
var numeros = [4, 3, 1, 9, 7, 2, 13];
console.table(numeros);

// Imprimindo os elementos das posições ímpares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

// Verificando se o array contém um item
console.log("Contém 9:", numeros.includes(9))
var contem0 = numeros.includes(0);
console.log("Contém 0:", contem0);

// Ordenando os elementos do vetor
numeros.sort();
console.table(numeros);

// Invertendo a ordem ou posição dos itens
numeros.reverse();
console.table(numeros);

// Alterando o valor de um elemento com base em sua posição
numeros[2] = 5;
console.table(numeros);

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

// Criando arrays hibridos
var hibrido = [10,"Ygona",3.45,"Aghata Nunes",7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "Maria José";
console.table(hibrido);

//criando uma matriz
var matriz = [
  [9,0,1],
  [7,1,2],
  [1,3,9]
];
console.table(matriz);
// Obtendo elemento com base em seus índices
console.log("Matriz[1,2] =", matriz[1][2]);
console.log("Matriz[2,0] =", matriz[2][0]);

// Alterando valores de elementos com base em seus índices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);
