function piccolo(arr) {
  let parkingLot = new Set();

  for (const element of arr) {
    let [direction, car] = element.split(', ');

    if (direction === 'IN') {
      parkingLot.add(car);
    } else {
      parkingLot.delete(car);
    }
  }

  let carsLeft = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
  if (carsLeft.length === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    console.log(carsLeft.join('\n'));
  }
}

piccolo([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU',
]);
