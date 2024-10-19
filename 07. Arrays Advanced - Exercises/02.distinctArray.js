function distinctArray(arr) {
  arr = arr.filter((value, index, array) => array.indexOf(value) === index);

  console.log(arr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
