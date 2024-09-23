function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let tempNum = i;
    let sum = 0;
    while (tempNum > 0) {
      sum += tempNum % 10;
      tempNum = Math.floor(tempNum / 10);
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(20);
