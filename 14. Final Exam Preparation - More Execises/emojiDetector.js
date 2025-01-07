function emojiDetector(arr) {
  let text = arr[0];
  let numberPattern = /\d/g;

  let coolThreshold = text
    .match(numberPattern)
    .map(Number)
    .reduce((p, c) => p * c);

  let count = 0;
  let coolOnes = [];

  let emojiPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
  let emojiMatches = emojiPattern.exec(text);
  while (emojiMatches) {
    count++;

    let emoji = emojiMatches[2];
    let currentThreshold = 0;

    for (const char of emoji) {
      currentThreshold += char.charCodeAt();
    }

    if (currentThreshold >= coolThreshold) {
      coolOnes.push(emojiMatches[0]);
    }

    emojiMatches = emojiPattern.exec(text);
  }
  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(`${count} emojis found in the text. The cool ones are:`);
  console.log(coolOnes.join('\n'));
}

emojiDetector([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);

emojiDetector([
  '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::',
]);

emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
