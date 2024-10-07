function nonDecreasingSubset(arr) {
  let newArr = [];
  newArr.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    let lastNumber = newArr[newArr.length - 1];
    let currentNumber = arr[i];

    if (currentNumber >= lastNumber) {
      newArr.push(currentNumber);
    }
  }

  console.log(newArr.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
