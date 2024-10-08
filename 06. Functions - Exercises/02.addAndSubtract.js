function addAndSubtract(numOne, numTwo, numThree) {
  function sum(numOne, numTwo) {
    return numOne + numTwo;
  }
  function subtract(sum, numThree) {
    return sum - numThree;
  }
  let sumOf = sum(numOne, numTwo);
  let result = subtract(sumOf, numThree);
  console.log(result);
}

addAndSubtract(23, 6, 10);
