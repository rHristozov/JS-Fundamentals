function oddOccurrences(input) {
  let arr = input.toLowerCase().split(' ');

  let occurrences = new Map();

  for (const word of arr) {
    if (!occurrences.has(word)) {
      occurrences.set(word, 1);
    } else {
      let currentCount = occurrences.get(word) + 1;
      occurrences.set(word, currentCount);
    }
  }
  let result = [];

  for (const [word, count] of occurrences) {
    if (count % 2 === 1) {
      result.push(word);
    }
  }

  console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
