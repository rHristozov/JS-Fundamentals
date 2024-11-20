function replaceRepeatingChars(str) {
  let currentChar = str[0];
  let nonRepeatingStr = currentChar;

  for (const char of str) {
    if (!(currentChar === char)) {
      currentChar = char;
      nonRepeatingStr += currentChar;
    }
  }
  console.log(nonRepeatingStr);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
