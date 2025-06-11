//for in loop

const fruits = {
  name: "apple",
  color: "red",
  price: 25,
};

for (prop in fruits) {
  console.log(fruits[prop]);
}
/////////////////////////////////////////////////////

function isObject(value) {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
}

const person = {
  name: "edwin",
  age: 21,
  address: {
    street: "cherai",
    city: "ekm",
  },
  hobbies: ["football", "gaming"],
};

for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nested in person[prop]) {
      console.log(person[prop][nested]);
    }
  } else {
    console.log(person[prop]);
  }
}
