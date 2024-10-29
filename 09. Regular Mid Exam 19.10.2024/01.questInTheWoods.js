function questInTheWoods(input) {
  let arr = input.map(Number);
  let days = arr.shift();
  let players = arr.shift();
  let groupEnergy = arr.shift();
  let waterForPersonPerDay = arr.shift();
  let foodForPersonPerDay = arr.shift();

  let totalWater = days * players * waterForPersonPerDay;
  let totalFood = days * players * foodForPersonPerDay;

  let daysCount = 1;
  let isSucceed = true;

  for (let i = 0; i < arr.length; i++) {
    let energyToLoose = arr[i];
    groupEnergy -= energyToLoose;
    if (groupEnergy <= 0) {
      isSucceed = false;
      break;
    }
    if (daysCount % 2 === 0) {
      groupEnergy *= 1.05;
      totalWater *= 0.7;
    }

    if (daysCount % 3 === 0) {
      groupEnergy *= 1.1;
      totalFood -= totalFood / players;
    }

    daysCount++;
  }

  if (isSucceed) {
    console.log(
      `You are ready for the quest. You will be left with ${groupEnergy.toFixed(
        2
      )} energy!`
    );
  } else {
    console.log(
      `You will run out of energy. You will be left with ${totalFood.toFixed(
        2
      )} food and ${totalWater.toFixed(2)} water.`
    );
  }
}

questInTheWoods([
  '12',
  '6',
  '4430',
  '9.8',
  '5.5',
  '620.3',
  '840.2',
  '960.1',
  '220',
  '340',
  '674',
  '365',
  '345.5',
  '212',
  '412.12',
  '258',
  '496',
]);
