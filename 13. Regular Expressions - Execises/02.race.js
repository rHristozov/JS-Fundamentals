function race(arr) {
  let playersArr = arr.shift().split(', ');
  let playersObj = {};
  playersArr.forEach((player) => (playersObj[player] = 0));

  let namePattern = /[A-Za-z]/g;
  let numberPattern = /\d/g;

  let command = arr.shift();

  while (command !== 'end of race') {
    let nameMatches = command.match(namePattern).join('');

    if (nameMatches in playersObj) {
      let numberMatches = command.match(numberPattern);
      let distance = numberMatches
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      playersObj[nameMatches] += distance;
    }
    command = arr.shift();
  }
  let sortedPlayers = Object.entries(playersObj).sort(([, a], [, b]) => b - a);
  console.log(`1st place: ${sortedPlayers[0][0]}`);
  console.log(`2nd place: ${sortedPlayers[1][0]}`);
  console.log(`3rd place: ${sortedPlayers[2][0]}`);
}

race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race',
]);
