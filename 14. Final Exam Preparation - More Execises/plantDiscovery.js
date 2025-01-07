function plantDiscovery(arr) {
  let count = Number(arr.shift());

  let plants = [];

  for (let i = 0; i < count; i++) {
    let [name, rarity] = arr.shift().split('<->');
    let plant = {};
    plant = { name, rarity, rating: [] };
    plants.push(plant);
  }

  let command = arr.shift();
  while (command !== 'Exhibition') {
    let [action, info] = command.split(': ');
    let [name] = info.split(' - ');
    let filteredPlant = plants.find((plant) => plant.name === name);

    if (filteredPlant) {
      if (action === 'Rate') {
        let [, rate] = info.split(' - ');
        rate = Number(rate);
        filteredPlant.rating.push(rate);
      } else if (action === 'Update') {
        let [, rarity] = info.split(' - ');
        filteredPlant.rarity = rarity;
      } else if (action === 'Reset') {
        filteredPlant.rating = [];
      }
    } else {
      command = arr.shift();
      console.log('error');
      continue;
    }
    command = arr.shift();
  }

  console.log('Plants for the exhibition:');
  for (const plant of plants) {
    let sum = plant.rating.reduce((p, c) => p + c, 0);
    let average = plant.rating.length === 0 ? 0 : sum / plant.rating.length;
    console.log(
      ` - ${plant.name}; Rarity: ${plant.rarity}; Rating: ${average.toFixed(2)}`
    );
  }
}

plantDiscovery([
  '3',
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition',
]);

// plantDiscovery(["2",
// "Candelabra<->10"
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"])
