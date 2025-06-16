///// js exersise
function countVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let strLowercase = str.toLowerCase();
  for (let char of strLowercase) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World"));
/////////////////////////////

function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(checkEvenOrOdd(7));
console.log(checkEvenOrOdd(10));
///////////////////////

function findMax(array) {
  maxNum = Math.max(...array);
  return maxNum;
}
console.log(findMax([3, 7, 2, 9, 5]));

///////

function reverseString(str) {
  let newStr = str.split("").reverse().join("");
  return newStr;
}
console.log(reverseString("hello"));
//////////
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  if (randomNumber % 3 == 0) {
    result = "Fizz";
  }
  if (randomNumber % 5 == 0) {
    result = "buzz";
  }
  if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
    result = "Fizz Buzz";
  }
  return result;
}
console.log(getRandomNumber());
