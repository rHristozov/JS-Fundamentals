function lettersChangeNumbers(str) {
  let stringArr = str.split(' ').filter((str) => str != '');
  let totalSum = 0;

  for (const word of stringArr) {
    let firstLetter = word[0];
    let secondLetter = word[word.length - 1];
    let currentSum = word.slice(1, word.length - 1);
    currentSum = Number(currentSum);

    if (firstLetter === firstLetter.toUpperCase()) {
      let alphabeticNumber = firstLetter.charCodeAt(0) - 64;
      currentSum /= alphabeticNumber;
    } else {
      let alphabeticNumber = firstLetter.charCodeAt(0) - 96;
      currentSum *= alphabeticNumber;
    }

    if (secondLetter === secondLetter.toUpperCase()) {
      let alphabeticNumber = secondLetter.charCodeAt(0) - 64;
      currentSum -= alphabeticNumber;
    } else {
      let alphabeticNumber = secondLetter.charCodeAt(0) - 96;
      currentSum += alphabeticNumber;
    }
    totalSum += currentSum;
  }
  console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('P34562Z q2576f   H456z');
