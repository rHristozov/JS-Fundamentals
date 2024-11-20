function movingTargets(input) {
  let targets = input
    .shift()
    .split(' ')
    .map((x) => Number(x));
  let i = 0;
  let command = input[i];

  function isIndexValid(targets, index) {
    return index >= 0 && index < targets.length;
  }

  while (command !== 'End') {
    let temp = command.split(' ');

    let action = temp.shift();
    let index = Number(temp.shift());
    let value = Number(temp.shift());

    if (action === 'Shoot') {
      if (isIndexValid(targets, index)) {
        targets[index] -= value;
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
      }
    } else if (action === 'Add') {
      if (isIndexValid(targets, index)) {
        targets.splice(index, 0, value);
      } else {
        console.log('Invalid placement!');
      }
    } else if (action === 'Strike') {
      let startIndex = index - value;
      let lastIndex = index + value;

      if (
        startIndex >= 0 &&
        lastIndex < targets.length &&
        isIndexValid(targets, index)
      ) {
        let count = lastIndex - startIndex + 1;
        targets.splice(startIndex, count);
      } else {
        console.log('Strike missed!');
      }
    }
    i++;
    command = input[i];
  }
  console.log(targets.join('|'));
}

movingTargets([
  '52 74 23 44 96 110',
  'Shoot 5 10',
  'Shoot 1 80',
  'Strike 2 1',
  'Add 22 3',
  'End',
]);
