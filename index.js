//object

let person = {
  name: "edwin",
  age: 21,
  gender: "male",
};
console.log(person.name); //dot notation

console.log(person["name"]); //bracket notation

let proName = "age";
console.log(person[proName]);

//object destruction

const person1 = {
  name: "edwin",
  age: 18,
};
const { name: personName, age: personAge } = person1;
console.log(personName, personAge);

function createPerson(name, age) {
  return { name, age };
}
const person2 = createPerson("edwin", 12);
console.log(person2);
