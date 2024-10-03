function maxNumber(arr) {
  let bigNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let isBigger = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        isBigger = false;
        break;
      }
    }
    if (isBigger && !bigNumbers.includes(arr[i])) {
      bigNumbers.push(arr[i]);
    }
  }
  console.log(bigNumbers.join(' '));
}

maxNumber([41, 41, 34, 20]);
