function pirates(arr) {
  let cities = [];
  let command = arr.shift();
  while (command !== 'Sail') {
    let [name, population, gold] = command.split('||');
    population = Number(population);
    gold = Number(gold);
    let currentCity = cities.find((city) => city.name === name);

    if (currentCity) {
      currentCity.population += population;
      currentCity.gold += gold;
    } else {
      let newCity = {};
      newCity = { name, population, gold };
      cities.push(newCity);
    }
    command = arr.shift();
  }
  command = arr.shift();
  while (command !== 'End') {
    let [type, name] = command.split('=>');
    let currentCity = cities.find((city) => city.name === name);

    if (type === 'Plunder') {
      let [, , population, gold] = command.split('=>');
      population = Number(population);
      gold = Number(gold);

      currentCity.population -= population;
      currentCity.gold -= gold;

      console.log(
        `${name} plundered! ${gold} gold stolen, ${population} citizens killed.`
      );

      if (currentCity.population <= 0 || currentCity.gold <= 0) {
        cities = cities.filter((city) => city.name !== name);
        console.log(`${name} has been wiped off the map!`);
      }
    } else if (type === 'Prosper') {
      let [, , gold] = command.split('=>');
      gold = Number(gold);

      if (gold <= 0) {
        console.log('Gold added cannot be a negative number!');
      } else {
        currentCity.gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${name} now has ${currentCity.gold} gold.`
        );
      }
    }
    command = arr.shift();
  }

  if (cities.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${cities.length} wealthy settlements to go to: `
    );
    for (const city of cities) {
      console.log(
        `${city.name} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`
      );
    }
  } else {
    console.log(
      'Ahoy, Captain! All targets have been plundered and destroyed!'
    );
  }
}

pirates([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
]);

console.log('-------------');

pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
