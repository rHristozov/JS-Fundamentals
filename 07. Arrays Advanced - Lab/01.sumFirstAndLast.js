function sumFirstAndLast(arr) {
  let firstElement = +arr.shift();
  let lastElement = +arr.pop();

  let sum = firstElement + lastElement;

  console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
