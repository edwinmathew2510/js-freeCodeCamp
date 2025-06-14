//Closures

function outer() {
  let message = "hello";

  function inner() {
    console.log(message); //clousers
  }
  inner();
}
outer();

message = "boom"; //private variable

///////////////////////////////
//count down
function counter() {
  let count = 0;
  function increment() {
    count++;
    console.log("value increment :" + count);
  }
  return { increment };
}

let coun = counter();
coun.increment();
coun.increment();
coun.increment();

///////////////////////
// point game

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log("scores is : " + points + " pts");
  }
  function decreaseScore(points) {
    score -= points;
    console.log("scores is : " + points + " pts");
  }
  function getScore() {
    return score;
  }
  return { increaseScore, decreaseScore, getScore };
}

let game = createGame();
game.increaseScore(5);
game.increaseScore(5);
game.decreaseScore(5);
console.log("total score is : " + game.getScore());

//////////////////////
//multyply

function createGreeter(greeting) {
  return function (name) {
    console.log(greeting + ", " + name);
  };
}

let sayHello = createGreeter("Hello");
sayHello("Alice");
