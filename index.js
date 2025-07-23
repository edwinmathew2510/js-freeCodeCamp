// crud operations

let items = [];

function createItem(item) {
  //create items
  items.push(item);
}

//read items
function readItem() {
  return items;
}
//updateItems
function updateItems(index, item) {
  items[index] = item;
}
//deleteItems
function deleteItems(index) {
  items.splice(index, 1);
}

createItem("book1");
createItem("book2");

updateItems(1, "update");
console.log(readItem());

deleteItems(1);
console.log(readItem());
