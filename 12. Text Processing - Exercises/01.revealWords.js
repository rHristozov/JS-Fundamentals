function revealWords(word, text) {
  let words = word.split(', ');

  for (const word of words) {
    let replacedWord = '*'.repeat(word.length);

    text = text.replace(replacedWord, word);
  }
  console.log(text);
}

revealWords(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);
