function charactersInRange(charOne, charTwo) {
  let firstIndex = charOne.charCodeAt();
  let secondIndex = charTwo.charCodeAt();

  let startingIndex = Math.min(firstIndex, secondIndex);
  let lastIndex = Math.max(firstIndex, secondIndex);

  let result = '';

  for (let i = startingIndex + 1; i < lastIndex; i++) {
    let currentChar = String.fromCharCode(i);
    result += currentChar + ' ';
  }
  console.log(result);
}

charactersInRange('a', 'd');
