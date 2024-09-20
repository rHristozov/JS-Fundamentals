function bitcoinMining(arr) {
  let totalMoney = 0;
  let currentDay = 1;
  let bitcoin = 0;
  let dayOfFirstBitcoin = 0;

  for (let goldMined of arr) {
    if (currentDay % 3 === 0) {
      goldMined *= 0.7;
    }
    let moneyFromGold = goldMined * 67.51;
    totalMoney += moneyFromGold;

    while (totalMoney >= 11949.16) {
      if (dayOfFirstBitcoin === 0) {
        dayOfFirstBitcoin = currentDay;
      }
      bitcoin++;
      totalMoney -= 11949.16;
    }
    currentDay++;
  }
  console.log(`Bought bitcoins: ${bitcoin}`);

  if (bitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
