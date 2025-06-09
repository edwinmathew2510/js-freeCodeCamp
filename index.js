const person = {
  name: "edwin",
  age: 21,
  company: "Googel",
};
console.log(person.age);

const strJson = `{
"name":"bob",
"age":12
}`;

console.log(strJson);

const parsedJson = JSON.parse(strJson);
console.log(parsedJson);
console.log(typeof parsedJson);

const stringyJson = JSON.stringify(person);
console.log(stringyJson);
const strToParse = JSON.parse(stringyJson);
console.log(strToParse);
