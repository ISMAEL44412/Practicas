// Dado el siguiente arreglo:
// let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

export let greater = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > greater) {
    greater = numbers[i];
  }
}
console.log("El mayor es " + greater);
