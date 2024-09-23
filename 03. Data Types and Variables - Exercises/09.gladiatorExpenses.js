function gladiatorExpenses(
  fightLost,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let shieldBroken = 0;
  for (
    let currentLostFight = 1;
    currentLostFight <= fightLost;
    currentLostFight++
  ) {
    if (currentLostFight % 2 === 0) {
      expenses += helmetPrice;
    }
    if (currentLostFight % 3 === 0) {
      expenses += swordPrice;
    }
    if (currentLostFight % 6 === 0) {
      expenses += shieldPrice;
      shieldBroken++;
    }
    if (shieldBroken === 2) {
      expenses += armorPrice;
      shieldBroken = 0;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.5, 21.5, 40, 200);
