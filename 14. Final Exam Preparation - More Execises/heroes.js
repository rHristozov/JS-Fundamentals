function heroes(arr) {
  let count = Number(arr.shift());
  let heroes = [];

  for (let i = 0; i < count; i++) {
    let hero = {};
    let [name, HP, MP] = arr.shift().split(' ');
    HP = Number(HP);
    MP = Number(MP);

    hero = { name, HP, MP };
    heroes.push(hero);
  }

  let command = arr.shift();

  while (command !== 'End') {
    let [, name] = command.split(' - ');
    let currentHero = heroes.find((hero) => hero.name === name);

    if (command.startsWith('CastSpell')) {
      let [, , MPneeded, spellName] = command.split(' - ');
      MPneeded = Number(MPneeded);

      if (MPneeded <= currentHero.MP) {
        currentHero.MP -= MPneeded;
        console.log(
          `${name} has successfully cast ${spellName} and now has ${currentHero.MP} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${spellName}!`);
      }
    } else if (command.startsWith('TakeDamage')) {
      let [, , damage, attacker] = command.split(' - ');
      damage = Number(damage);
      currentHero.HP -= damage;
      if (currentHero.HP > 0) {
        console.log(
          `${name} was hit for ${damage} HP by ${attacker} and now has ${currentHero.HP} HP left!`
        );
      } else {
        heroes = heroes.filter((hero) => hero.name !== name);
        console.log(`${name} has been killed by ${attacker}!`);
      }
    } else if (command.startsWith('Recharge')) {
      let [, , amount] = command.split(' - ');
      amount = Number(amount);

      if (currentHero.MP + amount > 200) {
        amount = 200 - currentHero.MP;
        currentHero.MP = 200;
      } else {
        currentHero.MP += amount;
      }
      console.log(`${name} recharged for ${amount} MP!`);
    } else if (command.startsWith('Heal')) {
      let [, , amount] = command.split(' - ');
      amount = Number(amount);

      if (currentHero.HP + amount > 100) {
        amount = 100 - currentHero.HP;
        currentHero.HP = 100;
      } else {
        currentHero.HP += amount;
      }
      console.log(`${name} healed for ${amount} HP!`);
    }
    command = arr.shift();
  }
  for (const hero of heroes) {
    console.log(`${hero.name}`);
    console.log(`  HP: ${hero.HP}`);
    console.log(`  MP: ${hero.MP}`);
  }
}

// heroes([
//   '2',
//   'Solmyr 85 120',
//   'Kyrre 99 50',
//   'TakeDamage - Kyrre - 500 - Orc',
//   'CastSpell - Kyrre - 15 - ViewEarth',
//   'End',
// ]);

heroes([
  '4',
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End',
]);
