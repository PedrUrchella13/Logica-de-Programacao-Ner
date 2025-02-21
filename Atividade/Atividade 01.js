/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/

let nome = "Jurandir Rei do Beirute";
let banco = "Banco Do Cuzil";
let agencia = 6913;
let conta = "12345-13";
let saldo = 13000;

console.log("-------------Banco do Cuzil-------------");
console.log("Cliente: Jurandir Rei do Beirute");
console.log("Agência:",agencia," |  Conta:",conta);
console.log("Seu saldo é de:",saldo,"\n");
console.log("*Foi depositado 500 reais da conta 65488-32 de Fátima Piriguete. Seu saldo é de:",saldo=saldo+500);//mesma coisa que fazer saldo += saldo
console.log("-Foi transferido 350 reais para a conta 38382-01 de Suely Trambiqueira. Seu saldo é de:",saldo=saldo-150);
console.log("-Foi transferido 8.000 reais para a conta 19320-59 de Fulano Bicheiro Estelionatario de Cabritos. Seu saldo é de:",saldo=saldo-8000);
console.log("*Foi depositado 1250 reais da conta 19382-32 de Rei do Beirute. Seu saldo é de:",saldo=saldo+1250);
console.log("****A agência barrou uma movimentação suspeita de 2.000.000,00 de reais para a conta:",conta,"e bloqueou permanentemente a mesma.****\n");

console.log("-------------Banco do Cuzil-------------");
console.log("Status: Bloqueada");
console.log("Cliente:",nome);
console.log("Agência:",agencia,"|  Conta:",conta);
console.log("Seu saldo é de:",saldo)

//**************************************** */
//Esse é o código do professor

// let nome = "Pafúncio";
// let banco = "SantoAndré";
// let agencia = 5866;
// let conta = "15874-9";
// let saldo = 500;
// console.log("*****************", banco, "*****************");
// console.log("Cliente:", nome);
// console.log("Agência:", agencia, "| Conta:", conta);
// console.log("Seu saldo é de R$", saldo);

// console.log("    + Depósito: R$75,00");
// saldo = saldo + 75;
// console.log("    + Depósito: R$100,00");
// saldo = saldo + 100;
// console.log("    - Saque: R$150,00");
// saldo = saldo - 150;
// console.log("    - Saque: R$200,00");
// saldo = saldo - 200;
// console.log("    + Depósito: R$50,00");
// saldo += 50; //mesma coisa que > saldo = saldo + 50;

// console.log("*****************", banco, "*****************");
// console.log("Cliente:", nome);
// console.log("Agência:", agencia, "| Conta:", conta);
// console.log("Seu saldo é de R$", saldo);
привет