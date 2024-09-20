function sortNumbers(num1, num2, num3) {
  let big = 0;
  let bigger = 0;
  let biggest = 0;
  if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
      biggest = num1;
      bigger = num2;
      big = num3;
    } else {
      biggest = num1;
      bigger = num3;
      big = num2;
    }
  } else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
      biggest = num2;
      bigger = num1;
      big = num3;
    } else {
      biggest = num2;
      bigger = num3;
      big = num1;
    }
  } else {
    biggest = num3;
    if (num1 >= num2) {
      bigger = num1;
      big = num2;
    } else {
      bigger = num2;
      big = num1;
    }
  }
  console.log(biggest);
  console.log(bigger);
  console.log(big);
}

sortNumbers(-1, -2, -3);
