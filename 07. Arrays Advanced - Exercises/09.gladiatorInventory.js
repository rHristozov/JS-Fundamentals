function gladiatorInventory(arr) {
  let inventory = arr.shift().split(' ');

  for (let i = 0; i < arr.length; i++) {
    temp = arr[i].split(' ');

    let action = temp[0];
    let equipment = temp[1];

    if (action === 'Buy') {
      actionAdd(inventory, equipment);
    } else if (action === 'Trash') {
      actionTrash(inventory, equipment);
    } else if (action === 'Repair') {
      actionRepair(inventory, equipment);
    } else if (action === 'Upgrade') {
      actionUpgrade(inventory, equipment);
    }
  }

  function actionAdd(inventory, equipment) {
    if (!inventory.includes(equipment)) {
      inventory.push(equipment);
    }
  }

  function actionTrash(inventory, equipment) {
    if (inventory.includes(equipment)) {
      let index = inventory.indexOf(equipment);
      inventory.splice(index, 1);
    }
  }

  function actionRepair(inventory, equipment) {
    if (inventory.includes(equipment)) {
      let index = inventory.indexOf(equipment);
      let repaired = inventory.splice(index, 1);
      inventory.push(repaired[0]);
    }
  }

  function actionUpgrade(inventory, equipment) {
    let items = equipment.split('-');
    let item = items[0];
    if (inventory.includes(item)) {
      let type = items[1];
      let index = inventory.indexOf(item);

      inventory.splice(index + 1, 0, `${item}:${type}`);
    }
  }

  console.log(inventory.join(' '));
}

gladiatorInventory([
  'SWORD Shield Spear',
  'Trash Bow',
  'Repair Shield',
  'Upgrade Helmet-V',
]);
