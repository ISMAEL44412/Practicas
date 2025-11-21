// 7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
// max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
// trabajar así:
// let maxValue = max( 5, 2, 6);
// console.log( maxValue );  6

function max(num1: number, num2: number, num3: number) {
  let max = [num1, num2, num3];
  let mayor = max[0];
  for (let i = 0; i <= max.length; i++) {
    if (max[i] > mayor) {
      mayor = max[i];
    }
  }
  return "El mayor es: " + mayor;
}
console.log(max(9, 11, 2));
