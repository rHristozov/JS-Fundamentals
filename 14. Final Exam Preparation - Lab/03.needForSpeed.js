function needForSpeed(arr) {
  let cars = [];

  let countCars = Number(arr.shift());

  for (let i = 0; i < countCars; i++) {
    let car = {};
    let [name, mileage, fuel] = arr.shift().split('|');
    mileage = Number(mileage);
    fuel = Number(fuel);
    car = { name, mileage, fuel };
    cars.push(car);
  }
  let command = arr.shift();

  while (command !== 'Stop') {
    let [action, name] = command.split(' : ');
    const currentCar = cars.find((element) => element.name === name);

    if (command.startsWith('Drive')) {
      let [, , mileage, fuel] = command.split(' :');
      mileage = Number(mileage);
      fuel = Number(fuel);
      if (fuel <= currentCar.fuel) {
        currentCar.fuel -= fuel;
        currentCar.mileage += mileage;
        console.log(
          `${name} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`
        );
        if (currentCar.mileage >= 100000) {
          cars = cars.filter((car) => car.name !== name);
          console.log(`Time to sell the ${name}!`);
        }
      } else {
        console.log('Not enough fuel to make that ride');
      }
    } else if (action === 'Refuel') {
      let [, , fuel] = command.split(' : ');
      fuel = Number(fuel);

      if (fuel + currentCar.fuel > 75) {
        let filledFuel = 75 - currentCar.fuel;
        currentCar.fuel = 75;
        console.log(`${name} refueled with ${filledFuel} liters`);
      } else {
        currentCar.fuel += fuel;
        console.log(`${name} refueled with ${fuel} liters`);
      }
    } else if (action === 'Revert') {
      let [, , mileage] = command.split(' : ');
      mileage = Number(mileage);
      if (currentCar.mileage - mileage < 10000) {
        currentCar.mileage = 10000;
      } else {
        currentCar.mileage -= mileage;
        console.log(`${name} mileage decreased by ${mileage} kilometers`);
      }
    }
    command = arr.shift();
  }

  for (let car of cars) {
    console.log(
      `${car.name} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`
    );
  }
}

needForSpeed([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop',
]);
