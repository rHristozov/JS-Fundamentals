function specialNumbers(num) {
  for (i = 1; i <= num; i++) {
    if (i % 5 === 0 || i % 7 === 0 || i % 11 === 0) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(15);
