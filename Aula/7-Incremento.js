//Operadores de incremento e decremento / pré e pós incremento
var idade = 16;
console.log(idade);

idade++; // idade = idade +1
console.log(idade);

idade--; // idade = idade -1
console.log(idade);
console.log("----------------------------------");

var novaIdade = idade++;
console.log("Idade:", idade, "| Nova idade:", novaIdade);

novaIdade = ++idade;
console.log("Idade:", idade, "| Nova idade:", novaIdade);

//Operadores de Atribuição Aritimética
console.log("----------------------------------");
var x = 10;
var y = 5;
console.log("x =", x, "| y =", y);

x += y; // x = x + y
console.log("x =", x, "| y =", y);

x -= y;// x = x- y
console.log("x =", x, "| y =", y);

x *= y; //x = x * y
console.log("x =",x,"| y =",y);

x /= y; //x = x / y
console.log("x =",x,"| y =",y);

x **= y //x = x ** y
console.log("x =",x,"| y =",y);


x %= y// x = resto da divisão inteira de x por y
console.log("x =",x,"| y =",y);

x = 13;
x %= y;
console.log("x =",x,"| y =",y);
