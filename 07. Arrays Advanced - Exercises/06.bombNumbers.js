function bombNumbers(numbers, bomb) {
  let bombNumber = bomb[0];
  let bombPower = bomb[1];

  while (numbers.includes(bombNumber)) {
    let bombIndex = numbers.indexOf(bombNumber);
    let startIndex = 0;
    let finalIdex = 0;

    if (bombIndex - bombPower <= 0) {
      startIndex = 0;
    } else {
      startIndex = bombIndex - bombPower;
    }

    if (bombIndex + bombPower >= numbers.length - 1) {
      finalIdex = numbers.length - 1;
    } else {
      finalIdex = bombIndex + bombPower;
    }
    let count = finalIdex - startIndex + 1;
    numbers.splice(startIndex, count);
  }

  let sum = numbers.reduce(
    (accumulator, current) => (accumulator += current),
    0
  );
  console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
