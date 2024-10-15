function arrayManipulations(input) {
  let arr = input.shift().split(' ').map(Number);

  for (let i = 0; i < input.length; i++) {
    let inputArr = input[i].split(' ');
    let command = inputArr[0];
    let index = 0;
    let number = 0;

    if (command === 'Add') {
      number = +inputArr[1];
      arr.push(number);
    } else if (command === 'Remove') {
      number = +inputArr[1];
      while (arr.indexOf(number) > 0) {
        index = arr.indexOf(number);
        arr.splice(index, 1);
      }
    } else if (command === 'RemoveAt') {
      index = +inputArr[1];
      arr.splice(index, 1);
    } else if (command === 'Insert') {
      number = +inputArr[1];
      index = +inputArr[2];
      arr.splice(index, 0, number);
    }
  }
  console.log(arr.join(' '));
}

arrayManipulations([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3',
]);
