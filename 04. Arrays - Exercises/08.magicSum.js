function magicSum(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === number) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
