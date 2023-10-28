
let a = 6;
let b = false;
let c = "12";
let d = 1;
let result = a + d + c + b;
console.log(result);

function add(a, b) {
return a + b;
}

console.log(add(5, 4));
console.log(add(10, 3));
console.log(add(994, 6));


function convertToDecimal(value) {
  return Number(value.replace(",", "."));
}

function calcBMI(weight, height) {
  weight = convertToDecimal(weight);
  height = convertToDecimal(height);

  const result = weight / height ** 2;

  return Number(result.toFixed(1));
}

const bmi = calcBMI("88,3", "1,75");
console.log(bmi); // 28.8
