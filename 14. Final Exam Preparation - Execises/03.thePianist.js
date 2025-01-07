function thePianist(arr) {
  let favoritePieces = [];
  let count = +arr.shift();

  for (let i = 0; i < count; i++) {
    let currentPiece = {};
    let [piece, composer, key] = arr.shift().split('|');
    currentPiece = { piece, composer, key };
    favoritePieces.push(currentPiece);
  }
  let command = arr.shift();
  while (command !== 'Stop') {
    let [action, piece] = command.split('|');
    let currentPiece = favoritePieces.find((p) => p.piece === piece);

    if (action === 'Add') {
      if (currentPiece) {
        console.log(`${piece} is already in the collection!`);
      } else {
        let [, , composer, key] = command.split('|');
        let newPiece = {};
        newPiece = { piece, composer, key };
        favoritePieces.push(newPiece);
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (action === 'Remove') {
      if (currentPiece) {
        favoritePieces = favoritePieces.filter((p) => p.piece !== piece);
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (action === 'ChangeKey') {
      if (currentPiece) {
        let [, , key] = command.split('|');
        currentPiece.key = key;
        console.log(`Changed the key of ${piece} to ${key}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }

    command = arr.shift();
  }
  for (const element of favoritePieces) {
    console.log(
      `${element.piece} -> Composer: ${element.composer}, Key: ${element.key}`
    );
  }
}

// thePianist([
//   '3',
//   'Fur Elise|Beethoven|A Minor',
//   'Moonlight Sonata|Beethoven|C# Minor',
//   'Clair de Lune|Debussy|C# Minor',
//   'Add|Sonata No.2|Chopin|B Minor',
//   'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//   'Add|Fur Elise|Beethoven|C# Minor',
//   'Remove|Clair de Lune',
//   'ChangeKey|Moonlight Sonata|C# Major',
//   'Stop',
// ]);

thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop',
]);
