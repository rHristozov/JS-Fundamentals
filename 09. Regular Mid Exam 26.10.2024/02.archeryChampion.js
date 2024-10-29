function archeryChampion(arr) {
  let targets = arr.shift().split('|').map(Number);

  let count = 0;
  let input = arr[count];
  let points = 0;

  while (input !== 'Game over') {
    let command = input.split(' ');

    if (command[0] === 'Shoot') {
      let [direction, startIndex, length] = command[1].split('@');
      startIndex = Number(startIndex);
      length = Number(length);

      if (startIndex < 0 || startIndex >= targets.length) {
        count++;
        input = arr[count];
        continue;
      }

      if (direction === 'Right') {
        let currentIndex = startIndex;
        for (let i = 0; i < length; i++) {
          if (currentIndex >= targets.length - 1) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
        }
        if (targets[currentIndex] < 5) {
          points += targets[currentIndex];
          targets[currentIndex] = 0;
        } else {
          points += 5;
          targets[currentIndex] -= 5;
        }
      } else if (direction === 'Left') {
        let currentIndex = startIndex;
        for (let i = 0; i < length; i++) {
          if (currentIndex <= 0) {
            currentIndex = targets.length - 1;
          } else {
            currentIndex--;
          }
        }
        if (targets[currentIndex] < 5) {
          points += targets[currentIndex];
          targets[currentIndex] = 0;
        } else {
          points += 5;
          targets[currentIndex] -= 5;
        }
      }
    } else if (command[0] === 'Reverse') {
      targets = targets.reverse();
    }

    count++;
    input = arr[count];
  }
  console.log(targets.join(' - '));
  console.log(`John finished the archery tournament with ${points} points!`);
}

archeryChampion([
  '10|10|10|10|10',
  'Shoot Left@0@2',
  'Shoot Right@4@5',
  'Shoot Right@5@5',
  'Reverse',
  'Game over',
]);
