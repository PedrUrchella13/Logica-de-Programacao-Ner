/***************************************************** 
                Lista de Exercícios 
*****************************************************/
// Crie um array de frutas com os seguintes elementos: Banana, Maçã, Pera, Uva, Morango.
// Adicione tangerina no final
//Adicione Goiaba no início.
// Exiba o conteúdo do índice 5.
// Exclua o elemento uva.
// Crie uma cópia do array apenas com elementos do índice 2, 3 e 4 maçã pera morango

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

frutas.push("Tangerina");
console.table(frutas);

frutas.unshift("Goiaba");
console.table(frutas);

console.log(frutas[5]);

var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1)
console.table(frutas);

var copia = frutas.slice(2, 5);
console.log("Copiando apenas 2,3,4")
console.table(copia);
