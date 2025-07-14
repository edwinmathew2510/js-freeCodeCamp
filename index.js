// debugging 2
// try catch error handling

function greet(name) {
  if (typeof name !== "string") {
    throw new TypeError("input should be a string");
  }
  return "hi " + name;
}
try {
  let result = greet(2);
  console.log("result :" + result);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Execution completed.");
}

// let firstNumber = 23;
// let secondNumber = 4;
// let sum = firstNumber + secondNumber;
// console.log(sum);

// const obj = [
//   { id: 1, name: "edwin", sex: "male" },
//   { id: 2, name: "kevin", sex: "male" },
//   { id: 3, name: "swapna", sex: "female" },
// ];

// console.table(obj);
// console.dir(obj);
// document.getElementById;
