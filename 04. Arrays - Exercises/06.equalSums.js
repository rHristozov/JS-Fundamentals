function equalSums(arr) {
  isExist = false;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }
    for (let j = i - 1; j >= 0; j--) {
      leftSum += arr[j];
    }
    if (leftSum === rightSum) {
      console.log(i);
      isExist = true;
    }
  }
  if (!isExist) {
    console.log('no');
  }
}

equalSums([1]);
