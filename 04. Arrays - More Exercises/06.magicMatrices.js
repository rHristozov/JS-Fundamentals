function magicMatrices(arr) {
  let sumHorizontal = 0;
  let sumVertical = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sumHorizontal += arr[i][j];
      totalRow;
    }

    for (let j = 0; j < arr.length; j++) {
      sumVertical += arr[j][i];
    }
  }
  if (sumHorizontal === sumVertical) {
    console.log('true');
  } else {
    console.log('false');
  }
}

magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
