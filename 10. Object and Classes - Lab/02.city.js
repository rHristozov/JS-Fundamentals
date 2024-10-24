function city(infoObj) {
  for (const key in infoObj) {
    let value = infoObj[key];
    console.log(`${key} -> ${value}`);
  }
}

city({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});
