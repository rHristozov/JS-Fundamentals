function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let el of arr) {
    let num = Number(el);

    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  console.log(evenSum - oddSum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
