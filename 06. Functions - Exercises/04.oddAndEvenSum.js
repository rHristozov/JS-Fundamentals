function oddAndEvenSum(number) {
  let stringNumber = number + '';

  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < stringNumber.length; i++) {
    let currentDigit = Number(stringNumber[i]);
    if (currentDigit % 2 === 0) {
      evenSum += currentDigit;
    } else {
      oddSum += currentDigit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
