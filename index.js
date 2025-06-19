const number = [1, 2, 3, 4, 5];

//map method
let double = number.map((num) => num * 2);
console.log(number);
console.log(double);

// filter method
let filtered = number.filter((num) => num % 2 == 0);
console.log(filtered);
console.log(number); //desont affect og array

//reduce methods

let reduce = number.reduce(
  (acummlator, currentValue) => acummlator + currentValue
);
console.log(reduce);
// method chaning

let transcations = [
  { amount: 100, type: "credit" },
  { amount: 34, type: "cash" },
  { amount: 80, type: "credit" },
  { amount: 60, type: "cash" },
  { amount: 320, type: "credit" },
];

let oprations = transcations
  .filter((transcation) => transcation.type == "credit")
  .map((transcation) => transcation.amount * 1.1)
  .reduce((sum, amount) => sum + amount, 0);

console.log(oprations);

//// sorted methods

let toSorted = [45, 576, 34532, 87568, 567, 234, 87];

toSorted.sort((a, b) => a - b);
console.log(toSorted);

//every method

let every = number.every((num) => num % 2 == 0);
console.log(every);

//some method

let some = number.some((num) => num % 2 == 0);
console.log(some);
