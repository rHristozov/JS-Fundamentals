function travelTime(arr) {
  let vacation = {};
  for (let line of arr) {
    let [country, city, price] = line.split(' > ');
    price = Number(price);

    if (country in vacation) {
      if (city in vacation[country]) {
        if (price < vacation[country][city]) {
          vacation[country][city] = price;
        }
      } else {
        vacation[country][city] = price;
      }
    } else {
      vacation[country] = {};
      vacation[country][city] = price;
    }
  }

  let countryEntries = Object.entries(vacation).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [country, cityObj] of countryEntries) {
    let cityEntries = Object.entries(cityObj).sort(
      ([keyA, valueA], [keyB, valueB]) => valueA - valueB
    );
    let cityString = '';
    for (let [city, price] of cityEntries) {
      cityString += `${city} -> ${price} `;
    }

    console.log(`${country} -> ${cityString}`);
  }
}

travelTime([
  'Bulgaria > Sofia > 25000',
  'Bulgaria > Sofia > 25000',
  'Kalimdor > Orgrimar > 25000',
  'Albania > Tirana > 25000',
  'Bulgaria > Varna > 25010',
  'Bulgaria > Lukovit > 10',
]);
