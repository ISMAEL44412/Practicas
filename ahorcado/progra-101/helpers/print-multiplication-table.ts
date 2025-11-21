export function printMultiplicationTable(base: number, limit: number = 10) {
  if (limit <= 0 || base <= 0) {
    console.log("No se pudo realizar la multiplicacion");
    return;
  }
  for (let i = 1; i <= limit; i++) {
    console.log(`${i} x ${base} = ${i * base}`);
  }
}
