function hardWork(arr) {
  let text = arr[0];
  let words = arr[1];

  let pattern = /\b_+\b/g;
  let match = pattern.exec(text);
  while (match !== null) {
    let currentMatch = match[0];
    let currentWord = words.filter((x) => x.length === currentMatch.length);
    text = text.replace(currentMatch, currentWord);
    match = pattern.exec(text);
  }
  console.log(text);
}

hardWork([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
]);
