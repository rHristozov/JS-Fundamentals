function mirrorWords(arr) {
  let pattern =
    /([@|#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;

  message = arr[0];
  let match = pattern.exec(message);
  let count = 0;
  let mirrorWords = [];

  if (match) {
    while (match) {
      count++;
      let firstWord = match[2];
      let secondWord = match[3];

      if (firstWord === secondWord.split('').reverse().join('')) {
        let word = firstWord + ' <=> ' + secondWord;
        mirrorWords.push(word);
      }

      match = pattern.exec(message);
    }
  } else {
    console.log('No word pairs found!');
    console.log('No mirror words!');
  }
  if (count !== 0) {
    console.log(`${count} word pairs found!`);
    if (mirrorWords.length > 0) {
      console.log('The mirror words are:');
      console.log(mirrorWords.join(', '));
    } else {
      console.log('No mirror words!');
    }
  }
}

// mirrorWords([
//   '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
// ]);

// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
