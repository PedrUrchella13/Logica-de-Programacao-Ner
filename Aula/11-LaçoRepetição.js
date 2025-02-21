// // //Laço de repetição - FOR

// // // O peofessor te colocou de castigo e pediu pra você escrever mil vezes a frase "Eu vou prestar atenção às aulas".
// // for (let i = 0; i < 1000; i++) {
// //   console.log("Eu vou prestar atenção na aula veyr!");
// // }

// // // Escreva os números de 1 a 20

// // for (let a = 1; a <= 20; a++) {
// //   console.log(a);
// // }
// // console.log("-----------------------------*--------------------------------");
// // // Mostre no console do sistema os números pares entre 1 e 20
// // for (let pares = 1; pares <= 20; pares++) {
// //   pares % 2 == 0 && console.log(pares);
// // }

// // // Dados de um vetor, calcule e exiba o somatório de seus elementos
// // console.log("-----------------------------*--------------------------------");
// // var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
// // console.log(numeros.length);
// // var soma = 0;
// // for (let b = 0; b < numeros.length; b++) {
// //   soma += numeros[b];
// // }

// // console.log("A soma dos elementos do array é de:", soma);

// //Dado um vetor, calcule e exiba a quantidade de pares e ímpares
// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // var pares = 0;
// // var impares = 0;
// // // ESSE CONDICIONAL ARMAZENA UM VALOR PARA REGISTRAR NO LOG DEPOIS
// // for (let i = 0; i < numeros.length; i++) {
// //   numeros[i] % 2 == 0 ? pares++ : impares++;
// // }

// // console.log("A quantidade de pares é:",pares,"números.");
// // console.log("A quantidade de ímpares é:",impares,"números.");

// // Dado um vetor, mutiplique todos os seus elementos por 3 com o laço FOR
// for (let i = 0; i < numeros.length; i++) {
//   numeros[i] *= 3;
// }
// console.log("A tabuadinha do três é:", numeros);

// //Dada uma matriz 2x3, mostre ao usuário todos seus elementos com suas respectivas posições;
// var matriz = [
//   [8, 4, 1],
//   [3, 7, 8],
// ];
// for (let linha = 0; linha < matriz.length; linha++) {
//   for (let = coluna = 0; coluna < matriz[0].length; coluna++) {
//     //console.log("Matriz[", linha, "][", coluna, "] =", matriz[linha][coluna]);
//     console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
//   }


for (let i = 0; i < 3; i++) {
  matriz[i] = [];}
  for (let j = 0; j < 3; j++) {
      matriz[i][j] = numeroAleatorio();
      }

//Laço de repeticão - While / Do While
