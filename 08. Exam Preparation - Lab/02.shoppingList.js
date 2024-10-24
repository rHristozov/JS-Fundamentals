function shoppingList(input) {
  let shoppingList = input.shift().split('!');

  let index = 0;
  let command = input[index];

  while (command !== 'Go Shopping!') {
    let temp = command.split(' ');

    let action = temp.shift();
    let item = temp.shift();

    let productIndex = shoppingList.indexOf(item);

    if (action === 'Urgent') {
      if (productIndex === -1) {
        shoppingList.unshift(item);
      }
    } else if (action === 'Unnecessary') {
      if (productIndex !== -1) {
        shoppingList.splice(productIndex, 1);
      }
    } else if (action === 'Correct') {
      if (productIndex !== -1) {
        let newItem = temp.shift();
        shoppingList[productIndex] = newItem;
      }
    } else if (action === 'Rearrange') {
      if (productIndex !== -1) {
        let removed = shoppingList.splice(productIndex, 1);
        shoppingList.push(removed[0]);
      }
    }
    index++;
    command = input[index];
  }
  console.log(shoppingList.join(', '));
}

shoppingList([
  'Tomatoes!Potatoes!Bread',
  'Unnecessary Milk',
  'Urgent Tomatoes',
  'Go Shopping!',
]);
