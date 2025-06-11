const numbers = [0, 1, 2, 3, 4, 5];
for (let num in numbers) {
  console.log(num);
}

const str = "freecodecamp";
for (let char in str) {
  console.log(char);
}

//for off loop
const people = [
  { name: "edwin", age: 21 },
  { name: "kevin", age: 13 },
  { name: "swapna", age: 40 },
];
for (const person of people) {
  console.log(`${person.name} has ${person.age} years old`);
}

const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
