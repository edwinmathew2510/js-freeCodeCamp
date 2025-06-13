//factorial
let num = 10;
function factorialCalculator(num) {
  let result = 1;
  for (let i = result; i <= num; i++) {
    result = result * i;
  }
  const resultMsg = `Factorial of ${num} is ${result}`;
  return resultMsg;
}

console.log(factorialCalculator(num));

//Implement the Mutations Algorithm

function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  for (let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }
  return true;
}
console.log(mutation(["hello", "hey"]));

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

//exersises
for (let i = 1; i < 6; i++) {
  if (i === 4) break;
  console.log(i);
}
const shoppingList = { tomatoes: 4, apples: 10 };
for (const item in shoppingList) {
  console.log(item);
}

const fruits = ["Mango", "Pineapple", "Oranges"];
for (const fruit of fruits) {
  console.log(fruit);
}
