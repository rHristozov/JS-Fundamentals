function spiceMustFlow(yield) {
  let tempYield = yield;
  let daysWorking = 0;
  let totalSpice = 0;

  while (tempYield >= 100) {
    daysWorking++;
    totalSpice += tempYield;
    totalSpice -= 26;
    tempYield -= 10;
    if (tempYield < 100) {
      totalSpice -= 26;
      break;
    }
  }
  console.log(daysWorking);
  console.log(totalSpice);
}

spiceMustFlow(450);
