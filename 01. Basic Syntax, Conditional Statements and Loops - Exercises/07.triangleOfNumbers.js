function triangleOfNumbers(num) {
  let line = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      line += `${i} `;
    }
    console.log(line);
    line = '';
  }
}

triangleOfNumbers(3);
