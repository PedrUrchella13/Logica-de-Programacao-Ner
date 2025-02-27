var contador = 1;
var cara = 0;
var coroa = 0;

do {
  cara += Math.random()*3 ? cara : coroa;
  console.log("Cara")
  console.log("Coroa")
  
  contador++;

} while (contador >= 3);

// a < b