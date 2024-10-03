function dungeonestDark(str) {
  let health = 100;
  let coins = 0;
  let isAlive = true;
  let rooms = str.split('|');

  for (let i = 0; i < rooms.length; i++) {
    let currentRoom = rooms[i];
    let tokens = currentRoom.split(' ');

    let command = tokens[0];
    let value = Number(tokens[1]);

    if (command === 'chest') {
      coins += value;
      console.log(`You found ${value} coins.`);
    } else if (command === 'potion') {
      let healthAdded = value;
      if (health + healthAdded > 100) {
        healthAdded = 100 - health;
      }
      health += healthAdded;
      console.log(`You healed for ${healthAdded} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else {
      health -= value;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${i + 1}`);
        isAlive = false;
        break;
      }
    }
  }
  if (isAlive) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
