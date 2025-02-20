// Condicional simples com IF
var anoNascimento = 2004;
if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003.");
}

if (anoNascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003.");
}

// Condições simples com IF-ELSE
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000.");
} else {
  console.log("A pessoa nasceu em 2000 ou antes");
}

// Condições opostas com IF
const login = "Adiminasto";
const senha = 696969;

var loginUser = "LuCouto";
var senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso Permitido!");
} else {
  console.log("Acesso Negado Lixo!");
}

// Desvio condicional aninhado - IF-ELSE-IF-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("Siga");
} else if (semaforo == "amarelo") {
  console.log("Atenção!");
} else {
  console.log("PARE!");
}

// Desvio condicional IF com bloco de comandos
var idade = 18;

if (idade <= 18) {
  console.log("Entrei no if...");
  idade++;
  console.log("Incrementei a idade...");
  console.log("A nova idade é", idade);
  console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

// Ceiando variaveis locais com let (que só existem em blocos)
var mes = "Maio";
var dia = 11;

if (dia == 11 && mes == "Maio") {
  let mensagem = "Hoje é dia 11 de Maio";
  console.log(mensagem);
}
console.log(
  "Tentando acessar uma variável local fora do bloco, vai dar errado"
);
// console.log(mensagem);

// Criando uma função com desvio condicional IF
const desconto = (valorCompra) =>{
    let desconto = 0;
    if (valorCompra >= 1000){
        desconto = valorCompra * 13/100
    }
    return desconto
}

var totalCompra = 950;
console.log("O valor total da compra é de R$",totalCompra," | Desconto: R$",desconto(totalCompra));
totalCompra= 1800;
console.log("Valor total da compra: R$", totalCompra, " | Desconto R$",desconto(totalCompra));

//Desvio condicional if inline (ternário)
//condição ? expressão se verdadeiro : expressão se falso
var preco = 500;
var resultado = preco <= 100 ? "Tá barato" : "Vish, ta caro.";
// O operador acima é o mesmo que escrever:
// if(preço <=100){
//resultado = "Ta barato!"
//}else{
//resultado = "Vish, ta caro"
//}
console.log("Preço: R$", preco, "-", resultado);

//If ternário com somente uma expressão
//condição && expressão
var logado = false;
logado && console.log("Usuário está logado");
