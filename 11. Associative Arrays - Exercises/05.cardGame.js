function cardGame(arr) {
  let players = {};
  for (const line of arr) {
    let name = line.split(': ')[0];
    let deck = line.split(': ')[1].split(', ');

    if (players.hasOwnProperty(name)) {
      addingCards(players, deck, name);
    } else {
      players[name] = [];
      addingCards(players, deck, name);
    }
  }

  for (const name in players) {
    let deck = players[name];
    let power = 0;
    let firstChar = 0;
    let secondChar = 0;
    for (const card of deck) {
      if (card.length > 2) {
        firstChar = 10;
        secondChar = secondNumToDigit(card[2]);
      } else {
        firstChar = firstNumToDigit(card[0]);
        secondChar = secondNumToDigit(card[1]);
      }

      power += firstChar * secondChar;
    }
    console.log(`${name}: ${power}`);
  }

  function addingCards(players, deck, name) {
    for (let card of deck) {
      if (players[name].includes(card)) {
        continue;
      } else {
        players[name].push(card);
      }
    }
  }

  function firstNumToDigit(firstChar) {
    if (firstChar === 'J') {
      return 11;
    } else if (firstChar === 'Q') {
      return 12;
    } else if (firstChar === 'K') {
      return 13;
    } else if (firstChar === 'A') {
      return 14;
    } else {
      return Number(firstChar);
    }
  }

  function secondNumToDigit(secondChar) {
    if (secondChar === 'S') {
      return 4;
    } else if (secondChar === 'H') {
      return 3;
    } else if (secondChar === 'D') {
      return 2;
    } else if (secondChar === 'C') {
      return 1;
    }
  }
}

cardGame(['Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Tomas: 6H, 7S, KC, KD, 5S, 10C']);
