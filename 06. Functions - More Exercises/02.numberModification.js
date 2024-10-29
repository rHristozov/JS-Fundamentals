function numberModification(number) {
  let numberStr = number + '';
  let numberArr = numberStr.split('');

  let isAverage = false;
  while (!isAverage) {
    let averageSum = numberArr
      .map(Number)
      .reduce((prev, current) => prev + current, 0);
    let count = numberArr.length;
    let average = averageSum / count;
    if (average < 5) {
      numberArr.push('9');
    } else {
      isAverage = true;
    }
  }
  console.log(numberArr.join(''));
}

numberModification(101);
