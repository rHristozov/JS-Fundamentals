function furniture(arr) {
  let pattern =
    />>(?<name>[A-Z][A-Za-z]+)+<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/;

  let totalPrice = 0;
  let boughtFurniture = [];
  let command = arr.shift();

  while (command !== 'Purchase') {
    let match = pattern.exec(command);
    if (match) {
      let { name, price, quantity } = match.groups;
      price = Number(price);
      quantity = Number(quantity);
      let currentPrice = price * quantity;
      boughtFurniture.push(name);
      totalPrice += currentPrice;
    }
    command = arr.shift();
  }
  console.log('Bought furniture:');
  for (const furniture of boughtFurniture) {
    console.log(furniture);
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture([
  '>>Laptop<<312.2323!3',
  '>>TV<<300.21314!5',
  '>Invalid<<!5',
  '>>TV<<300.21314!20',
  '>>Invalid<!5',
  '>>TV<<30.21314!5',
  '>>Invalid<<!!5',
  'Purchase',
]);
