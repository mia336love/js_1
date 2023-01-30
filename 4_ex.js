let a = -4;
let b = 2;
let c = 3;

let num1 = Math.abs(a ** 3);
let num2 = Math.abs(b ** 3);
let num3 = Math.abs(c ** 3);

let arith = (num1 + num2 + num3) / 3;
console.log("Среднее арифметическое модулей кубов данных чисел: ", arith);

let num01 = a ** 2;
let num02 = b ** 2;
let num03 = c ** 2;

let geom = Math.cbrt(num01 * num02 * num03);
console.log("Среднее геомтрическое квадратов данных чисел равно: ", geom);
