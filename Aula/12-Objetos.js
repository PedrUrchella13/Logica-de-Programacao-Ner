// Objetos em JavaScript
// Definindo uma classe em javascript (Pessoa)
//1-Classe (O molde dos objetos)

// class Pessoa {
//   //Criei uma classe chamada Pessoa (o molde)
//   constructor(nome, idade) {
//     //O construtor é como um formulário para se preencher, a respeito da classe que você construiu
//     this.nome = nome;
//     this.idade = idade;
//   }
// }
//2º passo: criando um objeto (personagem e aluno)
// var aluno1 = new Pessoa("Lucas", 22);
// aluno1 é um objeto baseado no molde Pessoa

//3ª passo: Acções que um obejto pode fazer
// class Pessoa {
//   //Criei uma classe chamada Pessoa (o molde)
//   constructor(nome, idade) {
//     //O construtor é como um formulário para se preencher, a respeito da classe que você construiu
//     this.nome = nome;
//     this.idade = idade;
//   }

//   apresentarSe() {
//     console.log(`Oi, meu nome é ${this.nome}, e eu tenho ${this.idade} anos`);
//   }

//   envelhecer() {
//     this.idade++;
//   }
// }

// var aluno1 = new Pessoa("Ygona", 23);
// aluno1.apresentarSe();
// aluno1.envelhecer();
// aluno1.apresentarSe();

//Class: Molde para criar objetos com uma ficha de aluno ou jogador

//Objeto: uma instancia real do modelo, como ygona ou lucas

//Atributo: característica do objeto, como nome e idade

//Ações: Acões que um objeto pode fazer, como falar sua idade ou envenlhecer

//Métodos: Ações que o objeto pode fazer, como falar sua idade ou envelhecer

//Crie uma class para jogador de futebol onde tenha nome, idade e posição
//O objeto criado com base no jogador de futebol poderá apresentar-se da seguinte forma:
//Olá, meu nome é "fulano ner", tenho "33" anos e jogo na posição "Atacante"

class Jogador {
  constructor(nome, idade, posicao) {
    this.nome = nome;
    this.idade = idade;
    this.posicao = posicao;
  }

  apresentarSi() {
    console.log(
      `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e jogo como ${this.posicao}!`
    );
  }
}

var pessoa1 = new Jogador(`Luva de Pedreiro`, 19, `Pobre`);
var pessoa2 = new Jogador("Neymar", 33, "Embaixador da Blaze");
var pessoa3 = new Jogador("Pelé", 87, "Atacante do Vasco");

pessoa1.apresentarSi();
pessoa2.apresentarSi();
pessoa3.apresentarSi();

//Criando classe retangulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  alterarComprimento(comprimento) {
    this.comprimento = comprimento;
  }

  alterarLargura(largura) {
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura;
  }
}

var ret = new Retangulo(10, 15);
console.table(ret);
//Apresentando valores atribitos do objeto instanciado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Altura: ${ret.largura}`);
//Apresentandoa a area
console.log(`Área: ${ret.obterArea}`);
//Alterando o comprimento do retangulo
ret.alterarComprimento(20);
console.table(ret);
//Alterando a largura do retangulo
ret.alterarLargura(30);
console.table(ret);

//Calculando a area
console.table(ret.obterArea());

class Sorvete {
  constructor(tamanho, sabor, preco) {
    this.tamanho = tamanho;
    this.sabor = sabor;
    this.preco = preco;
  }
}

var choc = new Sorvete(`pequeno`, `chocolate`, 3.5);
var moran = new Sorvete(`grande`, `morango`, 3.5);
var pist = new Sorvete(`medio`, `pistache`, 5.5);

console.log(
  `Sorvete escolhido: ${choc.sabor} | tamanho: ${choc.tamanho} | valor: ${choc.preco}`
);

moran.preco = 10.51;
