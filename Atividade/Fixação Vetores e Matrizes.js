/***************************************************** 
                Lista de Exercícios 
*****************************************************/
var dados = [];
console.log("Informe seu nome:");
dados.push("Aphonsynha");

console.table(dados);

console.log("Informe seu cpf:");
dados.push("123.456.789.01");
console.table(dados);

// Mostre aos usuários os dados e de bom dia :>

console.log("Olá,", dados[0], "seu CFP é:", dados[1], " | Tenha um bom dia!\n");

var copia = dados.slice();
console.log("Copiando um vetor");
console.table(copia);

