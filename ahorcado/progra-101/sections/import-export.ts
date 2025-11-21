import {
  addTwoNumbers,
  divideTwoNumbers,
  substractTwoNumbers,
  timesTwoNumbers,
} from "../helpers/math-helpers";

let num1 = 10;
let num2 = 20;

let addition: number = addTwoNumbers(num1, num2);
let substract: number = substractTwoNumbers(num1, num2);
let multiplication: number = timesTwoNumbers(num1, num2);
let division: number = divideTwoNumbers(num1, num2);

console.log(
  `Suma ${addition}, Resta: ${substract}, Multiplicacion ${multiplication}, Division ${division}`
);
