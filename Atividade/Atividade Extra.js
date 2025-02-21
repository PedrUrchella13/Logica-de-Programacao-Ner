/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.
*/
function parouimpar(num) {
  if (num % 2 == 0) {
    return console.log(num, "é par");
  } else {
    return console.log(num, "é ímpar\n");
  }
}

parouimpar(67);

const imparpar = (num) => {
  return num % 2 == 0 ? "O número é par veyr!" : "O número é ímpar veyr!";
};
console.log(imparpar(13));
console.log("------------------------------*---------------------------------");
// 📌 Dica: Use o operador % para verificar o resto da divisão.
// ------------------------------------------------------------------------

// 2. Tabuada
// Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.
var tabuada = 7;

console.log(tabuada, "x 1=", tabuada * 1);
console.log(tabuada, "x 2=", tabuada * 2);
console.log(tabuada, "x 3=", tabuada * 3);
console.log(tabuada, "x 4=", tabuada * 4);
console.log(tabuada, "x 5=", tabuada * 5);
console.log(tabuada, "x 6=", tabuada * 6);
console.log(tabuada, "x 7=", tabuada * 7);
console.log(tabuada, "x 8=", tabuada * 8);
console.log(tabuada, "x 9=", tabuada * 9);
console.log(tabuada, "x 10=", tabuada * 10);

// 📌 Exemplo (se o número for 3):
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
// ------------------------------------------------------------------------

// 3. Fatorial de um Número
// Solicite um número ao usuário e exiba no console o seu fatorial.
console.log("------------------------------*---------------------------------");
console.log("Fatorial de 5 =", 5 * 4 * 3 * 2 * 1);
// 📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
// ------------------------------------------------------------------------

// 4. Soma dos Números de um Array
// Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.
var numeros = [10, 20, 30, 40];
var soma = numeros[0] + numeros[1] + numeros[2] + numeros[3];
console.log("------------------------------*---------------------------------");
console.log(soma);
// 📌 Exemplo:
// let numeros = [10, 20, 30, 40];
// // Saída: Soma = 100
// ------------------------------------------------------------------------

// 5. Ordenação de Números
// Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.
console.log("------------------------------*---------------------------------");
var numeros = [2, 6, 1, 5, 4, 8];

numeros.sort();
console.table(numeros);

// 📌 Exemplo:
// Entrada: 8, 3, 5, 1, 9
// Saída: 1, 3, 5, 8, 9
// ------------------------------------------------------------------------
var gasto = 0;
var nome = prompt("Qual seu nome fofo?");
var banco = prompt("Pra qual banco você vendeu sua alma?");
var agencia = prompt("Em qual agência?");
var numeroConta = prompt("Qual o número da sua conta?");
var saldo = prompt(`Informe seu saldo (Não valer mentir em bi!).`);

console.log(
  `Olá ${nome}, você é cliente do ${banco} e se cadastrou na agência ${agencia}. Sua conta é a de número ${numeroConta}, e você tem atualmente ${saldo} reais!`
);

var x = 1;
while (x <= 5) {
  gasto += Math.random()*1000; //Valor aleatório entre 0 e 99.999999...
 // saldo -= gasto.toFixed(2);
  x++;
}
//console.log(saldo.toFixed(2)); // Conserta um valor decimal somente com duas (2) casas

var limite = 4600
if (gasto > limite) {
  console.log("Parece que você estourou seu cartão para a Lua! Contate um dos nossos agentes para pagar sua dívida.");
} else {
  console.log("Obrigado por usar nosso sistema!")
};

// Cara ou coroa - melhor de três rodadas - aleatório - DO WHILE

var cara = 1;
var coroa = 2;
var contador = 0;

do {
  let vitória = Math.random(1,2)
} while (contador > 3);
  

console.log(aa);)