function blackFlags(arr) {
  let days = +arr[0];
  let dailyPlunder = +arr[1];
  let expectedPlunder = +arr[2];
  let countDays = 0;
  let plunder = 0;

  for (let i = 0; i < days; i++) {
    countDays++;
    plunder += dailyPlunder;

    if (countDays % 3 === 0) {
      plunder += dailyPlunder / 2;
    }
    if (countDays % 5 === 0) {
      plunder *= 0.7;
    }
  }
  if (plunder >= expectedPlunder) {
    console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (plunder * 100) / expectedPlunder;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}

blackFlags(['5', '40', '100']);
