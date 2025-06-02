function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} its an leap year`;
  } else {
    return `${year} its not an leap year`;
  }
}
const year = 2025;
const result = isLeapYear(year);
console.log(result);
