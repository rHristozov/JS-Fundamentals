function factorialDivision(numOne, numTwo) {
  function factorial(number) {
    let fac = 1;
    for (let i = number; i > 0; i--) {
      fac *= i;
    }
    return fac;
  }
  let firstFactorial = factorial(numOne);
  let secondFactorial = factorial(numTwo);

  let result = firstFactorial / secondFactorial;
  console.log(result.toFixed(2));
}

factorialDivision(5, 2);
