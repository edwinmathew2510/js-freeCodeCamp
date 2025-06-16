//student msg exersise
function getAverage(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count = count + array[i];
  }
  let avgMark = count / array.length;
  return avgMark;
}
// console.log(getAverage([10, 20, 30]));

function getGrade(score) {
  let grade = "";
  if (score == 100) {
    grade = "A+";
  } else if (score >= 90 && score <= 99) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else if (score >= 0 && score <= 59) {
    grade = "F";
  }
  return grade;
}
// console.log(getGrade(95));

function hasPassingGrade(score) {
  let value;
  let grade = getGrade(score);
  if (grade == "F") {
    value = false;
  } else {
    value = true;
  }
  return value;
}

function studentMsg(array, score) {
  let average = getAverage(array);
  let grade = getGrade(score);
  let isResult = hasPassingGrade(score);

  if (isResult == true) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
