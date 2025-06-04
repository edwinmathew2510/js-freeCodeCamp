let lunches = [];
function addLunchToEnd(array, string) {
  array.push(string);
  console.log(string + " added to the end of the lunch menu.");
  return array;
}
function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}
function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let str = array.pop();
    console.log(`${str}removed from the start of the lunch menu."`);
  }
  return array;
}
function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = array.shift();
    console.log(removed + "removed from the start of the lunch menu.");
    return array;
  }
}
function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomIndex = math.floor(math.random() * array.length);
    console.log(`Randomly selected lunch:${array[randomIndex]}`);
    return array;
  }
}
function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items:" + array.join(","));
    return array;
  }
}
