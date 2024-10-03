function ladyBugs(arr) {
  let fieldSize = arr[0];
  let ladybugIdxs = arr[1].split(' ').map(Number);
  let field = [];

  for (let i = 0; i < fieldSize; i++) {
    if (ladybugIdxs.includes(i)) {
      field[i] = 1;
    } else {
      field[i] = 0;
    }
  }
  for (let j = 2; j < arr.length; j++) {
    let command = arr[j];
    let tokens = command.split(' ');
    let ladybugIdx = Number(tokens[0]);
    let directions = tokens[1];
    let flyLength = Number(tokens[2]);

    if (!field[ladybugIdx]) {
      continue;
    }
    field[ladybugIdx] = 0;

    if (directions === 'left') {
      let newIndex = ladybugIdx - flyLength;

      if (newIndex >= 0) {
        while (field[newIndex] === 1) {
          newIndex -= flyLength;
        }

        if (newIndex >= 0) {
          field[newIndex] = 1;
        }
      }
    } else {
      let newIndex = ladybugIdx + flyLength;

      if (newIndex < field.length) {
        while (field[newIndex] === 1) {
          newIndex += flyLength;
        }

        if (newIndex < field.length) {
          field[newIndex] = 1;
        }
      }
    }
  }
  console.log(field.join(' '));
}

ladyBugs([3, '0 1', '0 right 1', '2 right 1']);
