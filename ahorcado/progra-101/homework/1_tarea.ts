// Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )
// Ejemplo: 150 libras = 68.0388 kilogramos

export function libraKilogramo(libra: number) {
  let kilogramo: number = 0.453592;
  return kilogramo * libra;
}
console.log(libraKilogramo(150));
