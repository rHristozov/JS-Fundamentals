function searchForANumber(numbers, input) {
  let numberTake = input[0];
  let numberDelete = input[1];
  let numberForCheck = input[2];

  let workingNumbers = numbers.slice(0, numberTake);
  workingNumbers.splice(0, numberDelete);

  let count = workingNumbers.filter((n) => n === numberForCheck).length;
  console.log(`Number ${numberForCheck} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
