function wildZoo(arr) {
  let animals = [];
  let areas = [];

  let command = arr.shift();

  while (command !== 'EndDay') {
    if (command.startsWith('Add')) {
      let [temp, food, area] = command.split('-');
      let [, name] = temp.split(': ');
      food = Number(food);
      let currentAnimal = animals.find((animal) => animal.name === name);

      if (currentAnimal) {
        currentAnimal.food += food;
      } else {
        let animal = {};
        animal = { name, food, area };
        animals.push(animal);

        let currentArea = areas.find((a) => a.area === area);

        if (currentArea) {
          currentArea.count++;
        } else {
          let count = 1;
          let place = {};
          place = { area, count };
          areas.push(place);
        }
      }
    } else if (command.startsWith('Feed')) {
      let [temp, food] = command.split('-');
      let [, name] = temp.split(': ');
      food = Number(food);
      let currentAnimal = animals.find((animal) => animal.name === name);

      if (currentAnimal) {
        currentAnimal.food -= food;
        if (currentAnimal.food <= 0) {
          let currentArea = currentAnimal.area;
          let asd = areas.find((a) => a.area === currentArea);
          asd.count--;
          if (asd.count === 0) {
            areas = areas.filter((a) => a.area !== currentArea);
          }

          animals = animals.filter((animal) => animal.name !== name);
          console.log(`${name} was successfully fed`);
        }
      }
    }
    command = arr.shift();
  }
  console.log('Animals:');

  for (const animal of animals) {
    console.log(` ${animal.name} -> ${animal.food}g`);
  }
  console.log('Areas with hungry animals:');
  for (const area of areas) {
    console.log(` ${area.area}: ${area.count}`);
  }
}

// wildZoo([
//   'Add: Adam-4500-ByTheCreek',
//   'Add: Maya-7600-WaterfallArea',
//   'Add: Maya-1230-WaterfallArea',
//   'Feed: Jamie-2000',
//   'EndDay',
// ]);

// wildZoo([
//   'Add: Jamie-600-WaterfallArea',
//   'Add: Maya-6570-WaterfallArea',
//   'Add: Adam-4500-ByTheCreek',
//   'Add: Bobbie-6570-WaterfallArea',
//   'Feed: Jamie-2000',
//   'Feed: Adam-2000',
//   'Feed: Adam-2500',
//   'EndDay',
// ]);

wildZoo([
  'Add: Bonie-3490-RiverArea',
  'Add: Sam-5430-DeepWoodsArea',
  'Add: Bonie-200-RiverArea',
  'Add: Maya-4560-ByTheCreek',
  'Feed: Maya-2390',
  'Feed: Bonie-3500',
  'Feed: Johny-3400',
  'Feed: Sam-5500',
  'EndDay',
]);
