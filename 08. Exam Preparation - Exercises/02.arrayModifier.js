function arrayModifier(input) {
  let arr = input
    .shift()
    .split(' ')
    .map((x) => Number(x));

  let i = 0;
  let command = input[i];

  while (command !== 'end') {
    let temp = command.split(' ');
    let action = temp[0];
    let index1 = temp[1];
    let index2 = temp[2];

    if (action === 'swap') {
      let firstNum = arr[index1];
      let secondNUm = arr[index2];

      arr[index1] = secondNUm;
      arr[index2] = firstNum;
    } else if (action === 'multiply') {
      let firstNum = arr[index1];
      let secondNUm = arr[index2];

      arr[index1] = firstNum * secondNUm;
    } else if (action === 'decrease') {
      arr = arr.map((x) => x - 1);
    }
    i++;
    command = input[i];
  }
  console.log(arr.join(', '));
}

arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end',
]);
