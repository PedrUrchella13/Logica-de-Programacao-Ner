var a = 800000;
var b = 950000;
var anos = 0;

do {
  anos++;
  a += (a * 3) / 100;
  b += (b * 1.5) / 100;
  console.log(`Ano: ${anos} | População a: ${Math.round(a)} | População b: ${Math.round(b)}`);
} while (a > b);

console.log(`Demorara ${anos} para que o país a ultrapasse a população b, sendo a população a de ${a}, e a população b ${b}`);

