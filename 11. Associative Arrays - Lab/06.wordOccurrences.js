function wordOccurrences(arr) {
  let wordMap = new Map();

  for (const element of arr) {
    if (wordMap.has(element)) {
      let currentCount = wordMap.get(element) + 1;
      wordMap.set(element, currentCount);
    } else {
      wordMap.set(element, 1);
    }
  }
  wordMap = new Map(
    [...wordMap.entries()].sort(([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA;
    })
  );

  for (let [word, count] of wordMap) {
    console.log(`${word} -> ${count} times`);
  }
}

wordOccurrences([
  'Here',
  'is',
  'the',
  'first',
  'sentence',
  'Here',
  'is',
  'another',
  'sentence',
  'And',
  'finally',
  'the',
  'third',
  'sentence',
]);
