/*****************************************************
                Lista de Exercícios 
*****************************************************/
const podeVotar = (idade) => {
if (idade < 16) {
    return "Não pode votar.";
}else if(idade >=18 && idade < 70){
    return "Pode votar, sem opção de não votar. Te liga em!"
}else {
<<<<<<< HEAD
    return "tem voto facultativo.";
=======
    return "Tem voto facultativo";
>>>>>>> 1c52c21e2e1e832941531aecdf1aeb517d83262b
}
};
var nome = [
    "Ygona",
    "Cristinne",
    "Kelly",
    "Denise",
    "Batata"
];
console.log("Olá", nome[0],"Você tem 16 anos e", podeVotar(16));
console.log("Olá", nome[1],"Você tem 22 anos e", podeVotar(22));
console.log("Olá", nome[2],"Você tem 70 anos e", podeVotar(70));
console.log("Olá", nome[3],"Você tem 12 anos e", podeVotar(12));
<<<<<<< HEAD
console.log("Olá", nome[4],"Você tem 67 anos e", podeVotar(67));
=======
console.log("Olá", nome[4],"Você tem 67 anos e", podeVotar(67));
>>>>>>> 1c52c21e2e1e832941531aecdf1aeb517d83262b
