function storeProvision(firstArr, secondArr) {
  let store = {};

  for (let i = 0; i < firstArr.length; i += 2) {
    let item = firstArr[i];
    let quantity = +firstArr[i + 1];

    store[item] = quantity;
  }

  for (let i = 0; i < secondArr.length; i += 2) {
    let item = secondArr[i];
    let quantity = +secondArr[i + 1];

    if (item in store) {
      store[item] += quantity;
    } else {
      store[item] = quantity;
    }
  }
  let entries = Object.entries(store);
  for (const [item, quantity] of entries) {
    console.log(`${item} -> ${quantity}`);
  }
}
storeProvision(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
