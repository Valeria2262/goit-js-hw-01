
let a = 6;
let b = false;
let c = "12";
let d = 1;
let result77 = a + d + c + b;
console.log(result77);

let at = 9;
let bu = false;
let pc = "15";
let dw = 1;
let result55 = at + dw + pc + bu;
console.log(result55);

function add(a, b) {
return a + b;
}

console.log(add(5, 4));
console.log(add(10, 3));
console.log(add(994, 6));
console.log(add(121, 1));


function convertToDecimal(value) {
  return Number(value.replace(",", "."));
}

function calcBMI(weight, height) {
  weight = convertToDecimal(weight);
  height = convertToDecimal(height);

  const resultt = weight / height ** 2;

  return Number(resultt.toFixed(1));
}

const bmi = calcBMI("88,3", "1,75");
console.log(bmi); // 28.8




function convert(value) {
  return Number(value.replace(",", "."));
}

function calc(weight, height) {
  weight = convert(weight);
  height = convert(height);

  const resul = weight / height ** 2;

  return Number(resul.toFixed(1));
}

const bmmm = calc("100", "1,55");
console.log(bmmm); 

/* Первая задача */

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}


console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

console.log(makeTransaction(6, 600));
