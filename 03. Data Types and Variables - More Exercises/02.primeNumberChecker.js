function primeNumberChecker(num) {
  let isPrime = true;

  const s = Math.sqrt(num);

  for (let i = 2; i <= s; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
}

primeNumberChecker(81);
