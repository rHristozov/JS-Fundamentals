function BiggestOf3Numbers(numOne, numTwo, numThree) {
  if (numOne > numTwo && numOne > numThree) {
    console.log(numOne);
  } else if (numTwo > numOne && numTwo > numThree) {
    console.log(numTwo);
  } else {
    console.log(numThree);
  }
}

BiggestOf3Numbers(2, 2, 2);
