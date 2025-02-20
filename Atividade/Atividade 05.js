/***************************************************** 
                Lista de Exercícios 
*****************************************************/

//Atividade 1
function nasc(anoNasc) {
  return 2025 - anoNasc;
}

console.log("Olá, meu nome é Ygona e eu tenho", nasc(1989),"anos de idade!");
// 2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o veículo faz uma média de 12 Kms/L.
function kilometragem(combustivel) {
  return combustivel * 12;
  
}
console.log("Abasteci no Posto Ipiranha e rodei",kilometragem(69),"kilometros até Pirapozinho do Bom Jesus, Maranhão.");

