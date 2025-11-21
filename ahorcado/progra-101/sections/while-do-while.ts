// While
export let gasTank = 50;

while (gasTank > 0) {
  console.log("Gasolina restante", gasTank);
  gasTank--;
}
console.log("Ya no tienes gasolina");

// Do while
do {
  // Se ejecuta al menos una vez
  console.log("Gasolina restante", gasTank);
} while (gasTank > 0);

console.log("Ya no tienes gasolina");
