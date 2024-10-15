function lastKNumbersSequance(range, step) {
  let result = [1];
  for (let i = 1; i < range; i++) {
    let current = result.slice(-step);

    let sum = 0;

    for (const num of current) {
      sum += num;
    }
    result.push(sum);
  }
  console.log(result.join(' '));
}

lastKNumbersSequance(6, 3);
