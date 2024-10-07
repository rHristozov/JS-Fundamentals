function orders(product, quantity) {
  let sum = 0;

  if (product === 'water') {
    sum += quantity * 1;
  } else if (product === 'coffee') {
    sum += quantity * 1.5;
  } else if (product === 'coke') {
    sum += quantity * 1.4;
  } else if (product === 'snacks') {
    sum += quantity * 2;
  }
  console.log(sum.toFixed(2));
}

orders('water', 5);
orders('coffee', 2);
