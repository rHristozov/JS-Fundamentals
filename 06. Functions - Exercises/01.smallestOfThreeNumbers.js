function smallestOfThreeNumbers(numberOne, numberTwo, numberThree) {
  if (numberOne <= numberTwo && numberOne <= numberThree) {
    console.log(numberOne);
  } else if (numberTwo <= numberOne && numberTwo <= numberThree) {
    console.log(numberTwo);
  } else {
    console.log(numberThree);
  }
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);
