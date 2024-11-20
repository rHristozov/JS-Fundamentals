function heartDelivery(input) {
  let neighborhood = input
    .shift()
    .split('@')
    .map((x) => Number(x));

  let i = 0;
  let command = input[i];
  let jumpIndex = 0;

  while (command !== 'Love!') {
    let temp = input[i].split(' ');
    let step = Number(temp[1]);

    if (jumpIndex + step > neighborhood.length - 1) {
      jumpIndex = 0;
    } else {
      jumpIndex += step;
    }

    if (neighborhood[jumpIndex] === 0) {
      console.log(`Place ${jumpIndex} already had Valentine's day.`);
    } else {
      neighborhood[jumpIndex] -= 2;
      if (neighborhood[jumpIndex] === 0) {
        console.log(`Place ${jumpIndex} has Valentine's day.`);
      }
    }
    i++;
    command = input[i];
  }
  let filteredNeighbrohood = neighborhood.filter((house) => house !== 0);

  console.log(`Cupid's last position was ${jumpIndex}.`);

  if (filteredNeighbrohood.length > 0) {
    console.log(`Cupid has failed ${filteredNeighbrohood.length} places.`);
  } else {
    console.log(`Mission was successful.`);
  }
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
