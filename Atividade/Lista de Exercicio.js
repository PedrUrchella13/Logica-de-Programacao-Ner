// Lista de Exercícios de Lógica de Programação em JavaScript
// 1. Variáveis e Operações Matemáticas
// 1. Declare três variáveis numéricas e exiba no console a soma, subtração,
// multiplicação e divisão entre elas.
var varNum1 = 7;
var varNum2 = 28;
var varNum3 = 13;

console.log("A soma entre as variáveis é", varNum1 + varNum2 + varNum3);
console.log("A subtração entre as variáveis é", varNum1 - varNum2 - varNum3);
console.log(
  "A multiplicação entre as variáveis é",
  varNum1 * varNum2 * varNum3
);
console.log("A divisão entre as variáveis é", varNum1 / varNum2 / varNum3);
// 2. Crie três variáveis representando as notas de um aluno e calcule sua
// média. Se a média for maior ou igual a 7, exiba "Aprovado", senão,
// "Reprovado".
console.log(`|----------------***---------------|`);
var x2 = 7.0;
var y2 = 8.5;
var z = 9.0;
var media = (x2 + y2 + z) / 3;

if (media >= 7) {
  console.log(`Aprovado!`);
} else {
  console.log(`Reprovado`);
}

// 3. Dado um salário bruto de R$3.000,00, calcule o salário líquido
console.log(`|----------------***---------------|`);
var bruto = 3000;
var inss = bruto * 0.08;
var ir = bruto * 0.05;
var liquido = bruto - inss - ir;

console.log(`O valor do salário líquido é de ${liquido} reais`);
// 4. Considere um círculo com raio de 7cm. Calcule e exiba a circunferência e a
// área do círculo (use Math.PI).
console.log(`|----------------***---------------|`);
Math.PI;
var raio = 7;
console.log(
  "A área de uma circunferencia de raio =",
  raio,
  "cm:",
  Math.PI * raio ** 2
);
// 5. Uma loja de eletrônicos vende celulares a R$1.500,00 cada e oferece
// desconto progressivo:
// o 5% para compras de 2 unidades;
console.log(`|----------------***---------------|`);
console.log(
  "Você comprou 2 celulares por R$ 3.000 reais, logo recebeu um disconto de",
  1500 * 2 * 0.05
);
// o 10% para compras de 3 unidades;
console.log(
  "Você comprou 3 celulares por R$ 4.500 reais, logo recebeu um disconto de",
  1500 * 3 * 0.1
);
// o 15% para compras de 4 ou mais unidades. Exiba o valor final a pagar
console.log(
  "Você comprou 4 celulares por R$ 6.000 reais, logo recebeu um disconto de",
  1500 * 4 * 0.15
);
// para cada quantidade.
// 2. Estruturas Condicionais (IF, ELSE)
// 6. Dado um número qualquer, exiba se ele é múltiplo de 3, múltiplo de 5 ou
// múltiplo de ambos.
console.log(`|----------------***---------------|`);
var numero = 30;

if (numero % 3 == 0) {
  console.log(`O número é múltiplo de 3`);
} else {
  console.log(`O número não é múltiplo de 3`);
}

if (numero % 5 == 0 && 5) {
  console.log(`o número é múltiplo de 5`);
} else {
  console.log(`O número não é multiplo de 5`);
}

// 7. Determine se um ano específico (exemplo: 2024) é bissexto (divisível por 4
// e não por 100, exceto se for divisível por 400).
console.log(`|----------------***---------------|`);
const anoBissexto = (ano) => {
  if (ano % 400 === 0) {
    return console.log(`O ano de ${ano} é bissexto por ser divisível por 400`);
  }
  if (ano % 100 === 0) {
    return console.log(
      `O ano de ${ano} não é bissexto por ser divisivel por 100 e não por 400`
    );
  }
  if (ano % 4 === 0) {
    return console.log(
      `O ano de ${ano} é bissexto por ser divisível por 4, mas não por 100`
    );
  }
  return console.log(`O ano de ${ano} não é bissexto`);
};

anoBissexto(2023);
anoBissexto(1900);
anoBissexto(2022);

// 8. Dado um número de 0 a 6, exiba o dia da semana correspondente (0 =
// Domingo, 1 = Segunda...).
console.log(`|----------------***---------------|`);
var semana = 3;

switch (semana) {
  case 0:
    console.log(`Segunda Feira`);
    break;

  case 1:
    console.log(`Terça Feira`);
    break;

  case 2:
    console.log(`Quarta Feira`);
    break;

  case 3:
    console.log(`Quinta Feira`);
    break;

  case 4:
    console.log(`Sexta Feira`);
    break;

  case 5:
    console.log(`Sábado`);
    break;

  case 6:
    console.log(`Domingo`);
    break;

  default:
    console.log(`Não existe esse dia`);
    break;
}

// 9. Se um motorista ultrapassar um limite de velocidade de 80km/h, ele será
// multado. Para cada km acima do limite, a multa custa R$5,00. Determine o
// valor da multa para um carro a 95km/h.
console.log(`|----------------***---------------|`);
var kilometragem = 95;
var limite = 80;

if (kilometragem > limite) {
  console.log(`Você foi multado em ${(kilometragem - limite) * 5}`);
} else {
  console.log(`Não tem multa`);
}

// 10.Crie um programa que, dado o preço de um produto, aplique um desconto
// conforme a seguinte tabela:

// o Menos de R$50,00: sem desconto.

// o Entre R$50,00 e R$100,00: 5% de desconto.

// o Acima de R$100,00: 10% de desconto.
console.log(`|----------------***---------------|`);
var produto = 59;
var semDisconto = 0;
var peqDisconto = 50;
var grdDisconto = 100;

if (produto >= 100) {
  console.log(`Disconto de ${produto * 0.1}`);
} else if (produto > peqDisconto && produto < grdDisconto) {
  console.log(`Disconto de ${produto * 0.05}`);
} else {
  console.log(`Sem desconto`);
}
// 3. Laços de Repetição (FOR, WHILE)
// 11. Exiba todos os números pares entre 1 e 50.
console.log(`|----------------***---------------|`);
for (let i = 0; i <= 50; i += 2) {
  console.log("Números pares de 0 até 100:", i);
}
// 12. Exiba a tabuada do número 9 (de 9 × 1 até 9 × 10).
console.log(`|----------------***---------------|`);
for (let i = 1; i <= 10; i++) {
  console.log(`9 x ${i} é igual a = ${i * 9}`);
}
// 13. Some os números de 1 a 100 e exiba o resultado.
var soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}

// 14.Dado um array [3, 5, 7, 9, 11], exiba a soma de seus elementos.
console.log(`|----------------***---------------|`);
var numeros = [3, 5, 7, 9, 11];
console.log(numeros.length);
var somatoria = 0;

for (let i = 0; i < numeros.length; i++) {
  somatoria += numeros[i];
}
console.log(`A somatória dos elementos de um array é de ${somatoria}`);
// 15.Crie um contador regressivo que comece em 10 e exiba cada número até 0.
console.log(`|----------------***---------------|`);
for (let i = 10; i > 0; i--) {
  console.log(i);
}
// 4. Vetores e Manipulação de Strings
// 16.Crie um array com os dias da semana e exiba a quarta-feira.
console.log(`|----------------***---------------|`);
var semana = [
  `Segunda Feira`,
  `Terça Feira`,
  `Quarta Feira`,
  `Quinta Feira`,
  `Sexta Feira`,
  `Sabado`,
  `Domingo`,
];
console.log(semana[2]);
// 17.Crie um array com cinco frutas e remova a terceira fruta da lista.
console.log(`|----------------***---------------|`);
var frutas = [`Morango`, `Romã`, `Uva`, `Pitaya`, `Maracujá`];
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);
// 18.Crie um array de números e exiba apenas os números maiores que 10.
console.log(`|----------------***---------------|`);
var numeros = [1, 7, 13, 19, 28];
for (let i = 0; i < numeros.length; i++) {
  numeros[i] > 10
    ? console.log(`${numeros[i]} realmente é maior que 10`)
    : console.log(``);
}
// 19. Transforme a string "JavaScript é incrível!" em maiúsculas e exiba no
// console.
console.log(`|----------------***---------------|`);
var palavra = `JavaScript é Incrível`;
console.log(palavra.toUpperCase());
// 20.Dada a string "A vida é bela e cheia de desafios", exiba quantas palavras
// existem nela.
console.log(`|----------------***---------------|`);
var palavra = `A vida é bela e cheia de desafios`;
var ohio = 1;
for (let i = 0; i < palavra.length; i++) {
  if (palavra[i] == ` `) {
    ohio++;
  }
}

console.log(`A frase tem ${ohio} palavras`)
// 5. Desafios Extras
// 21.Dado um vetor [12, 45, 67, 89, 23], exiba o maior número presente nele.
console.log(`|----------------***---------------|`);
var numeros = [12,45,67,89,23];
var swag = numeros.sort();
var rizz = numeros.length - 1;
console.log(`O maior número do array é ${swag[rizz]}`)
// 22. Inverta a string "Desenvolvimento" e exiba "otnemivolpsoD".
console.log(`|----------------***---------------|`);
var nossaPalavra = `Desenvolvimento`;
var tamanho = nossaPalavra.length;
var invertidar = ``;

for (let i = tamanho -1; i >= 0; i--) {
  invertidar += nossaPalavra[i]
}
console.log(invertidar)
// 23.Conte quantas letras "a" existem na frase "Aprender JavaScript é
// maravilhoso!".
console.log(`|----------------***---------------|`);
var gurlBehindchyou = `Aprender JavaScript é maravilhoso`;
var tamanho = gurlBehindchyou.length;
var indice = 0;

for (let i = 0; i < tamanho; i++) {
  if (gurlBehindchyou[i] == `A` || gurlBehindchyou[i] == `a`) {
    indice++;
  }
  
}
console.log(`Temos ${indice} unidades de letras "A"`)
// 24. Substitua todas as vogais da string "Desenvolvimento Web" por "*".
console.log(`|----------------***---------------|`);
var theWorld = `Desenvolvimento Web`;
var vogais = theWorld.split("");
var tamanho = theWorld.length;
for (let i = 0; i < tamanho; i++) {
  if (theWorld[i] == `a` ||theWorld[i] == `e` ||theWorld[i] == `i` ||theWorld[i] == `o` ||theWorld[i] == `u`){
    vogais[i] = `*`;
  }
}
vogais = vogais.join("");
console.log(vogais)
// 25.Crie um vetor de 5 números e exiba a média deles.
console.log(`|----------------***---------------|`);
var numeros = [13,7,28,9,235];
var soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(`A média dos números ${numeros} é de ${soma / numeros.length}`)