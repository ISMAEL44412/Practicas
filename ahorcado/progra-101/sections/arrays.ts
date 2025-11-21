export let people: string[] = ["Fernando", "Melisa", "Eduardo"];

export let salaries: number[] = [1500, 2500, 3200];

// let flowers: string[] = ["Rosa", "Girasol", "Lirio"];

// for (let i = 0; i < flowers.length; i++) {
//   console.log(flowers[i]);
// }

for (let i = 0; i < people.length; i++) {
  if (salaries[i] != undefined) {
    console.log(people[i] + " Tiene un salario de " + salaries[i]);
  } else {
    console.log("No hay salario");
  }
}
