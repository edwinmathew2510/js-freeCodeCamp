// calculations with Number  and other datatypes

value1 = 5 + "10";
console.log(value1); //made both value string
console.log(typeof value1);

value2 = 5 - "10";
console.log(value2);
console.log(typeof value2); //made both into number

value3 = 5 * "10";
console.log(value3);
console.log(typeof value3); //made both into number

value4 = 5 / "10";
console.log(value4);
console.log(typeof value4); //made both into number

value5 = 5 - "abc";
console.log(value5);
console.log(typeof value5); //made both into nan ,Applied to sub,div,mul

// operations with boolean

valuet = 5 + true;
console.log(valuet);
console.log(typeof valuet); //made both into number

valuef = 5 + false;
console.log(valuef);
console.log(typeof valuef); //made both into number

valuefs = "abc " + true;
console.log(valuefs);
console.log(typeof valuefs); //made both into string

valueb = "5" / true;
console.log(valueb);
console.log(typeof valueb); //made both into number
