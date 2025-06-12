// // ///break statement

for (let i = 1; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

// //continue statement

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//label

outerloop: for (let i = 0; i < 3; i++) {
  innerloop: for (let j = 0; j < 3; j++) {
    if (i == 1 && j == 1) {
      break outerloop;
    }
    console.log(`i:${i} , j:${j}`);
  }
}
