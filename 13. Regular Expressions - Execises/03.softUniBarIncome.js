function softUniBarIncome(arr) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d+)\$/;

  let totalIncome = 0;
  let command = arr.shift();

  while (command !== 'end of shift') {
    let match = pattern.exec(command);
    if (match) {
      let { name, product, count, price } = match.groups;
      count = Number(count);
      price = Number(price);
      let currentIncome = count * price;

      totalIncome += currentIncome;
      console.log(`${name}: ${product} - ${currentIncome.toFixed(2)}`);
    }
    command = arr.shift();
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift',
]);
