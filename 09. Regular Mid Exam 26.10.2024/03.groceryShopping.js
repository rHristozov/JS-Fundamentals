function groceryShopping(arr) {
  let products = arr.shift().split('|');

  let count = 0;
  let input = arr[count];

  while (input !== 'Shop!') {
    let temp = input.split('%');
    let command = temp[0];

    if (command === 'Important') {
      let product = temp[1];
      if (products.indexOf(product) === -1) {
        products.unshift(product);
      } else {
        let index = products.indexOf(product);
        products.splice(index, 1);
        products.unshift(product);
      }
    } else if (command === 'Add') {
      let product = temp[1];
      if (products.indexOf(product) === -1) {
        products.push(product);
      } else {
        console.log('The product is already in the list.');
      }
    } else if (command === 'Swap') {
      let productOne = temp[1];
      let productTwo = temp[2];

      let indexOne = products.indexOf(productOne);
      let indexTwo = products.indexOf(productTwo);

      if (indexOne === -1) {
        console.log(`Product ${productOne} missing!`);
      } else if (indexTwo === -1) {
        console.log(`Product ${productTwo} missing!`);
      } else {
        products[indexOne] = productTwo;
        products[indexTwo] = productOne;
      }
    } else if (command === 'Remove') {
      let product = temp[1];
      if (products.indexOf(product) === -1) {
        console.log(`Product ${product} isn't in the list.`);
      } else {
        let index = products.indexOf(product);
        products.splice(index, 1);
      }
    } else if (command === 'Reversed') {
      products = products.reverse();
    }
    count++;
    input = arr[count];
  }
  let j = 1;
  for (let i = 0; i < products.length; i++) {
    console.log(`${j}. ${products[i]}`);
    j++;
  }
}

groceryShopping([
  'kiwi|paper|coffee',
  'Add%coffee',
  'Important%bread',
  'Shop!',
]);
