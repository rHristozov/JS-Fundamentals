function wordTracker(arr) {
  let givenWords = arr.shift().split(' ');

  let words = {};
  for (let word of givenWords) {
    words[word] = 0;
  }

  for (let currentWord of arr) {
    if (currentWord in words) {
      words[currentWord]++;
    }
  }

  let sorted = Object.entries(words).sort(
    ([keyA, valueA], [keyB, valueB]) => valueB - valueA
  );

  for (let [key, value] of sorted) {
    console.log(`${key} - ${value}`);
  }
}

wordTracker([
  'this sentence',
  'In',
  'this',
  'sentence',
  'you',
  'have',
  'to',
  'count',
  'the',
  'occurrences',
  'of',
  'the',
  'words',
  'this',
  'and',
  'sentence',
  'because',
  'this',
  'is',
  'your',
  'task',
]);
