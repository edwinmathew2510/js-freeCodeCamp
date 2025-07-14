// debugging;

function validate(input) {
  if (typeof input !== "number") {
    throw new TypeError(
      "Expected input should be number ,but received input : " + typeof input
    );
  }
  return input * 2;
}
console.log(validate(1));

///////////////////////////////////

function divide(n, d) {
  if (d === 0) {
    throw new TypeError("Can divide with Zero ");
  }
  return n / d;
}
console.log(divide(5, 0));
