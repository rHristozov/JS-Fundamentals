function train(arr) {
  let vagons = arr.shift().split(' ').map(Number);
  let maxCapacity = +arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(' ');
    let people = 0;

    if (command[0] === 'Add') {
      people = +command[1];
      vagons.push(command[1]);
    } else {
      people = +command[0];

      for (let i = 0; i < vagons.length; i++) {
        if (vagons[i] + people <= maxCapacity) {
          vagons[i] += people;
          break;
        }
      }
    }
  }
  console.log(vagons.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
