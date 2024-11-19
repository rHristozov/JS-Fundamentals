function countStringOccurrences(text, word) {
  let textArr = text.split(' ');
  let count = 0;

  for (const el of textArr) {
    if (el === word) {
      count++;
    }
  }
  console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
