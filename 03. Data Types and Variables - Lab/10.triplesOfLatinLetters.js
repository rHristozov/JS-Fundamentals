function triplesOfLatinLetters(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let k = 0; k < num; k++) {
        let firstChar = String.fromCharCode(97 + i);
        let secondChar = String.fromCharCode(97 + j);
        let thirdChar = String.fromCharCode(97 + k);
        console.log(`${firstChar}${secondChar}${thirdChar}`);
      }
    }
  }
}

triplesOfLatinLetters(5);
