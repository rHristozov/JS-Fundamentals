function robotsAdventure(input) {
  let arr = input;
  let cityGrid = arr.shift().split('|').map(Number);
  let i = 0;
  let commands = arr[i];
  let collectedItems = 0;

  while (commands !== 'Adventure over') {
    let type = commands.split(' ');

    if (type[0] === 'Step') {
      let direction = type[1].split('$');

      if (direction[0] === 'Backward') {
        let index = +direction[1];
        let steps = +direction[2];

        if (index < 0 && index > cityGrid.length - 1) {
          break;
        } else {
          for (let i = 0; i < steps; i++) {
            if (index === 0) {
              index = cityGrid.length - 1;
            } else {
              index--;
            }
          }
          collectedItems += cityGrid[index];
          cityGrid[index] = 0;
        }
      } else if (direction[0] === 'Forward') {
        let index = +direction[1];
        let steps = +direction[2];

        if (index < 0 && index > cityGrid.length - 1) {
          break;
        } else {
          for (let i = 0; i < steps; i++) {
            if (index === cityGrid.length - 1) {
              index = 0;
            } else {
              index++;
            }
          }
          collectedItems += cityGrid[index];
          cityGrid[index] = 0;
        }
      }
    } else if (type[0] === 'Double') {
      let index = type[1];
      if (index < 0 && index > cityGrid.length - 1) {
        break;
      } else {
        cityGrid[index] *= 2;
      }
    } else if (type[0] === 'Switch') {
      cityGrid = cityGrid.reverse();
    }

    i++;
    commands = arr[i];
  }
  console.log(cityGrid.join(' - '));

  console.log(`Robo finished the adventure with ${collectedItems} items!`);
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
