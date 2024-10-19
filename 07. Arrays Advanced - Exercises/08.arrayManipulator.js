function arrayManipulator(numbers, input) {
  for (el of input) {
    let temp = el.split(' ');
    let command = temp[0];
    let number = 0;
    let index = 0;

    if (command === 'add') {
      index = +temp[1];
      number = +temp[2];

      numbers.splice(index, 0, number);
    } else if (command === 'addMany') {
      index = +temp[1];
      for (let i = temp.length - 1; i >= 2; i--) {
        numbers.splice(index, 0, +temp[i]);
      }
    } else if (command === 'contains') {
      number = +temp[1];
      console.log(numbers.indexOf(number));
    } else if (command === 'remove') {
      index = +temp[1];

      numbers.splice(index, 1);
    } else if (command === 'shift') {
      number = +temp[1];
      for (let i = 1; i <= number; i++) {
        let firstEl = numbers.shift();
        numbers.push(firstEl);
      }
    } else if (command === 'sumPairs') {
      let reducedArray = [];
      for (let i = 0; i < numbers.length; i += 2) {
        let currElement = numbers[i];
        let nextElement = 0;
        if (i + 1 < numbers.length) {
          nextElement = numbers[i + 1];
        }

        reducedArray.push(currElement + nextElement);
      }

      numbers = [...reducedArray];
    } else if (command === 'print') {
      console.log(`[ ${numbers.join(', ')} ]`);
    }
  }
}

arrayManipulator(
  [1, 2, 3, 4, 5],
  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);
