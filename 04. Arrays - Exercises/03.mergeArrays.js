function mergeArrays(arr1, arr2) {
  let modifiedArray = [];

  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      modifiedArray[i] = Number(arr1[i]) + Number(arr2[i]);
    } else {
      modifiedArray[i] = arr1[i] + arr2[i];
    }
  }
  console.log(modifiedArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
