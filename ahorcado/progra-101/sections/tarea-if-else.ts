/* 
Realizar un programa que muestre la nota del alumno como: A, B, C, D, F
donde:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

export let grade = 30;
export let gradelatter = "";

if (grade >= 90) {
} else if (grade >= 80) {
  gradelatter = "A";
} else if (grade >= 70) {
  gradelatter = "B";
} else if (grade < 60) {
  gradelatter = "F";
} else {
  gradelatter = "D";
}
console.log("La nota del alumno es:", gradelatter);
