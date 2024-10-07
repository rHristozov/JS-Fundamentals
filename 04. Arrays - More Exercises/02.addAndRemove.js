function addAndRemove(arr) {
  let newArr = [];
  let initialNumber = 1;

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    if (command === 'add') {
      newArr.push(initialNumber);
      initialNumber++;
    } else {
      newArr.pop();
      initialNumber++;
    }
  }
  if (newArr.length === 0) {
    console.log('Empty');
  } else {
    console.log(newArr.join(' '));
  }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
