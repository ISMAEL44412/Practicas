// Crear una función que reciba un arreglo como argumento, la función debe de retornar un
// nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
// Ejemplo:
// let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
// let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
// console.log( herosWithLetterS ); // She Hulk, Spiderman
// Tip: Para determinar si un string empieza con una letra
// let hero = ‘Spiderman';
// hero.startsWith(’S’); // true
// Si se tiene un arreglo vació, por ejemplo:
// let newHeroes = [];
// Se puede insertar en el arreglo así:
// newHeroes.push('Hulk');

function arreglo(arreglo: string[], letra: string) {
  let newArray: string[] = [];
  for (let i = 0; i < arreglo.length; i++) {
    let palabra: string = arreglo[i];
    if (palabra.startsWith(letra)) {
      newArray.push(arreglo[i]);
    }
  }
  return newArray;
}
let array = ["Hola", "Letra", "HOLA"];
console.log(arreglo(array, "H"));
