function bakeryShop(arr) {
  let stocks = [];
  let totalSell = 0;
  let command = arr.shift();

  while (command !== 'Complete') {
    if (command.startsWith('Receive')) {
      let [, quantity, food] = command.split(' ');
      quantity = Number(quantity);
      let currentFood = stocks.find((item) => item.food === food);

      if (quantity <= 0) {
        command = arr.shift();
        continue;
      }

      if (currentFood) {
        currentFood.quantity += quantity;
      } else {
        let item = {};
        item = { food, quantity };
        stocks.push(item);
      }
    } else if (command.startsWith('Sell')) {
      let [, quantity, food] = command.split(' ');
      quantity = Number(quantity);
      let currentFood = stocks.find((item) => item.food === food);

      if (currentFood) {
        if (quantity > currentFood.quantity) {
          console.log(
            `There aren't enough ${food}. You sold the last ${currentFood.quantity} of them.`
          );
          totalSell += currentFood.quantity;
          stocks = stocks.filter((item) => item.food !== food);
        } else {
          totalSell += quantity;
          currentFood.quantity -= quantity;
          console.log(`You sold ${quantity} ${food}.`);
          if (currentFood.quantity === 0) {
            stocks = stocks.filter((item) => item.food !== food);
          }
        }
      } else {
        console.log(`You do not have any ${food}.`);
      }
    }
    command = arr.shift();
  }
  for (const item of stocks) {
    console.log(`${item.food}: ${item.quantity}`);
  }
  console.log(`All sold: ${totalSell} goods`);
}

bakeryShop([
  'Receive 105 cookies',
  'Receive 10 donuts',
  'Sell 10 donuts',
  'Sell 1 bread',
  'Complete',
]);
