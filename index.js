//binary logical operator

//logical and &&
const result = 0 && false; //USED TO CHAECK MULTIPLE CONDITIONS
console.log(result);

if (2 < 3 && 3 < 4) {
  console.log("if ");
} else {
  console.log("else");
}

//logical or|| operator

const orResult = true || 0;
console.log(orResult); //check weather if one condition is true

let userInput;
if (userInput || "guest") {
  console.log("user found ");
} else {
  console.log("no user");
}

//nullish coshing operator

let coResult = null ?? "default";
console.log(coResult);

const userSettings = {
  theme: null,
  Notification: false,
  volume: 0,
};
let theme = userSettings.theme ?? "light";
console.log(theme);
