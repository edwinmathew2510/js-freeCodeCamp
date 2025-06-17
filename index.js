// sum all numbers algorithm.
function sumAll(arrNum) {
  let first = arrNum[0];
  let second = arrNum[1];
  let arrSum = 0;
  if (first <= second) {
    for (let i = first; i <= second; i++) {
      arrSum = arrSum + i;
    }
    return arrSum;
  } else {
    for (let i = second; i <= first; i++) {
      arrSum = arrSum + i;
    }
    return arrSum;
  }
}
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
