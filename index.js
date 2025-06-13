//VowelCount
function getVowelCount(sentence) {
  let vowels = ["a", "e", "i", "o", "u"];
  let lowerCaseSentence = sentence.toLowerCase();
  let count = 0;
  for (char of lowerCaseSentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(getVowelCount("Apples are tasty fruits"));

//ConsonantCount
function getConsonantCount(sentence) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(getConsonantCount("Hello,World!"));

//PunctuationCount

function getPunctuationCount(sentence) {
  let clearSentence = sentence.replaceAll(" ", "");
  count = 0;
  for (let char of clearSentence.toLowerCase()) {
    if (!(char >= "a" && char <= "z")) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

//WordCount
function getWordCount(sentence) {
  let words = sentence
    .trim()
    .split(" ")
    .filter((word) => word !== "");
  return words.length;
}
const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
