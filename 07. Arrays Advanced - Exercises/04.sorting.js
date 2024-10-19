function sorting(arr) {
  arr.sort((a, b) => b - a);

  let result = [];

  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (i === j) {
      result.push(arr[i]);
      break;
    }
    result.push(arr[i]);
    result.push(arr[j]);
  }
  console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47, 1]);
