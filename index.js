//opretor precdence

var result = 2 + 4 * 5 - 2;
console.log(result); //* has more precdence value than +,-

//By using parentheses to force certain parts of the expression to be evaluated first.
var result = 2 + 2 / 8 - 1;
console.log(result); /// has more precendence value than +,-

var result = 10 - 2 + 5;
console.log(result); //assoactivity left to right

var result = (b = 10);
console.log(b, result); //assignment oprator has assotivity right to left

var result = 2 ** (3 ** 2); //exponet opeartor will assotive from right to left
console.log(result);
