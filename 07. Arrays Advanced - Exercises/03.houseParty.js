function houseParty(arr) {
  let guests = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split(' ');
    let name = temp[0];
    let action = temp[2];

    if (guests.includes(name)) {
      if (action === 'going!') {
        console.log(`${name} is already in the list!`);
      } else {
        let index = guests.indexOf(name);
        guests.splice(index, 1);
      }
    } else {
      if (action === 'going!') {
        guests.push(name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(guests.join('\n'));
}

houseParty([
  'Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!',
]);
