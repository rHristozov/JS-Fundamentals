function carWash(arr) {
  let value = 0;

  function soap() {
    return (value += 10);
  }

  function water() {
    return (value *= 1.2);
  }

  function vacuumCleaner() {
    return (value *= 1.25);
  }

  function mud() {
    return (value *= 0.9);
  }

  for (let command of arr) {
    if (command === 'soap') {
      soap();
    } else if (command === 'water') {
      water();
    } else if (command === 'vacuum cleaner') {
      vacuumCleaner();
    } else if (command === 'mud') {
      mud();
    }
  }
  console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
