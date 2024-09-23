function sumDigit(num) {
  let tempNum = num;
  let sum = 0;

  while (tempNum > 0) {
    sum += tempNum % 10;
    tempNum = Math.floor(tempNum / 10);
  }
  console.log(sum);
}

sumDigit(245678);
