function rotateArray(arr) {
  let step = +arr[arr.length - 1];
  let modifiedArray = arr;
  modifiedArray.pop();

  for (let i = 0; i < step; i++) {
    let lastElement = modifiedArray.pop();
    modifiedArray.unshift(lastElement);
  }
  console.log(modifiedArray.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
