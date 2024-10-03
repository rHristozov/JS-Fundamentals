function condenseArrayToNumber(arr) {
  let nums = [];
  while (arr.length !== 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      nums[i] = arr[i] + arr[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
      arr[i] = nums[i];
    }
    if (arr.length === nums.length) {
      nums.pop();
    }
    arr.pop();
  }
  console.log(arr[0]);
}

condenseArrayToNumber([1]);
