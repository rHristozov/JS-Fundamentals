function schoolLibrary(input) {
  let booksArr = input.shift().split('&');

  let count = 0;
  let command = input[count];

  while (command !== 'Done') {
    let action = command.split(' | ');

    if (action[0] === 'Add Book') {
      let book = action[1];
      if (!booksArr.includes(book)) {
        booksArr.unshift(book);
      }
    } else if (action[0] === 'Take Book') {
      let book = action[1];
      let bookIndex = booksArr.indexOf(book);
      if (bookIndex !== -1) {
        booksArr.splice(bookIndex, 1);
      } else {
        break;
      }
    } else if (action[0] === 'Swap Books') {
      let firstBook = action[1];
      let secondBook = action[2];
      let firstBookIndex = booksArr.indexOf(firstBook);
      let secondBookIndex = booksArr.indexOf(secondBook);

      if (firstBookIndex !== -1 && secondBookIndex !== -1) {
        booksArr[firstBookIndex] = secondBook;
        booksArr[secondBookIndex] = firstBook;
      } else {
        break;
      }
    } else if (action[0] === 'Insert Book') {
      let book = action[1];
      if (booksArr.includes(book)) {
        break;
      } else {
        booksArr.push(book);
      }
    } else if (action[0] === 'Check Book') {
      let bookIndex = +action[1];
      if (bookIndex > 0 && bookIndex < booksArr.length - 1) {
        console.log(booksArr[bookIndex]);
      } else {
        break;
      }
    }

    count++;
    command = input[count];
  }
  console.log(booksArr.join(', '));
}

// schoolLibrary([
//   'Anna Karenina&Heart of Darkness&Catch-22&The Stranger',
//   'Add Book | Catch-22',
//   'Swap Books | Anna Karenina | Catch-22',
//   'Take Book | David Copperfield',
//   'Done',
// ]);

// schoolLibrary([
//   'Don Quixote&The Great Gatsby&Moby Dick',
//   'Add Book | Ulysses',
//   'Take Book | Don Quixote',
//   "Insert Book | Alice's Adventures in Wonderland",
//   'Done',
// ]);

schoolLibrary([
  'War and Peace&Hamlet&Ulysses&Madame Bovary',
  'Check Book | 2',
  'Swap Books | Don Quixote | Ulysses',
  'Done',
]);
