//while loop

// while(condition){}

let userInput = prompt("enter a number between 1 to 10");
while (isNaN(userInput) || Number(userInput) < 1 || Number(userInput) > 10) {
  userInput = prompt("the Number you have entered is not valid");
}
alert("You have entered valid number");

//do while loop
let userInput1;
do {
  userInput1 = prompt("plx enter a number btw 1 to 10");
} while (Number(userInput1) >= 1 || Number(userInput1) <= 10);
alert("valid");
