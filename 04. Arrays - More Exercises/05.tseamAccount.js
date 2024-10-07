function tseamAccount(arr) {
  let games = arr[0].split(' ');
  let i = 1;
  let command = arr[i].split(' ');

  let action = command[0];
  let currentGame = command[1];

  while (action != 'Play!') {
    if (action === 'Install') {
      if (!games.includes(currentGame)) {
        games.push(currentGame);
      }
    } else if (action === 'Uninstall') {
      if (games.includes(currentGame)) {
        games = games.filter((game) => game != currentGame);
      }
    } else if (action === 'Update') {
      if (games.includes(currentGame)) {
        games = games.filter((game) => game != currentGame);
        games.push(currentGame);
      }
    } else if (action === 'Expansion') {
      let gameWithExpansion = currentGame.split('-');
      let game = gameWithExpansion[0];
      let expansion = gameWithExpansion[1];
      if (games.includes(game)) {
        let index = games.indexOf(game) + 1;
        games.splice(index, 0, `${game}:${expansion}`);
      }
    }

    i++;
    command = arr[i].split(' ');
    action = command[0];
    currentGame = command[1];
  }
  console.log(games.join(' '));
}

tseamAccount([
  'CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!',
]);
