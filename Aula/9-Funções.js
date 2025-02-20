// Explicando
function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());

// Criando uma função que soma dois valores e retorna o resultado
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3=", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6.5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("A soma de v1 + v2 =", somar(v1, v2));

// Criando uma função em que escreve bom dia :>
function bomdia(nome) {
  console.log("Olá,", nome, "muitos bom dias a voceizes!");
}

bomdia("Afonsinhar da Borracharia");

//Criando uma função que calcula e retorna o desconto de uma venda
function desconto(valor){
    return valor * 5 / 100;
}
//console.log("O desconto do produto no valor de 100 reaizes é: R$",desconto(100));
var totalPedido = 300;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("----------------------------------------------")
console.log("Total do pedido: R$", totalPedido);
console.log("Total de descontos: R$", totalDesconto);
console.log("Valor líquido: R$", valorFinal);
console.log("----------------------------------------------")

//Criando uma função que apresenta pessoas com arrow function
const apresentaPessoas = (nomePessoa,idade,cidade) => {
    //Apreento a vocês: "Nome_Pessoa", que tem "XX" anos, e mora em "Cidade"
    console.log("Apresento a vocês", nomePessoa,"que tem", idade,"anos e mora em", cidade);
}

apresentaPessoas("Ygona", 31,"São Paulo");
apresentaPessoas("BigBig", 29,"Salvador");
apresentaPessoas("Maria Verônica", 43, "Taubaté");