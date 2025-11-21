import { printMultiplicationTable } from "../helpers/print-multiplication-table";
export let base = 10;
export let limit = 50;

for (let i = 1; i <= limit; i++) {
  console.log(`${base} x ${i} = ${i * base}`);
}

console.log(printMultiplicationTable(3));
