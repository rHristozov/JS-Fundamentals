function numbers(str) {
  let numbersArr = str.split(' ').map(Number);
  let sum = numbersArr.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );
  let averageNumber = (sum / numbersArr.length).toFixed(2);
  let filteredNumber = numbersArr
    .filter((number) => number > averageNumber)
    .sort((a, b) => b - a);

  if (filteredNumber.length !== 0) {
    let answer = '';
    if (filteredNumber.length > 5) {
      for (let i = 0; i < 5; i++) {
        answer += filteredNumber[i] + ' ';
      }
    } else {
      for (let i = 0; i < filteredNumber.length; i++) {
        answer += filteredNumber[i] + ' ';
      }
    }
    console.log(answer);
  } else {
    console.log('No');
  }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('10 20 30 40 50');
numbers('-1 -2 -3 -4 -5 -6');
