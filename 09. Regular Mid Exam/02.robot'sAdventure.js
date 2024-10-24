function robotsAdventure(input) {
  let arr = input;
  let cityGrid = arr.shift().split('|');
  let i = 0;
  let commands = arr[i];

  while (commands !== 'Adventure over') {
    let type = commands.split(' ');
    if (type[0] === 'Step') {
      let direction = type[1].split('$');

      if (direction[0] === 'Backward') {
        let index = direction[1];
        let steps = direction[2];

        if (index < 0 && index > cityGrid.length - 1) {
          break;
        } else {
        }
      }
    }

    i++;
    commands = arr[i];
  }
}

robotsAdventure([
  '20|30|40|50|60',
  'Step Backward$0$12',
  'Step Forward$4$15',
  'Step Backward$2$5',
  'Double 1',
  'Switch',
  'Adventure over',
]);
