function towns(arr) {
  let resultArr = [];
  for (el of arr) {
    let [town, latitude, longitude] = el.split(' | ');
    latitude = Number(latitude);
    longitude = Number(longitude);

    let townObj = {
      town,
      latitude: latitude.toFixed(2),
      longitude: longitude.toFixed(2),
    };
    resultArr.push(townObj);
  }
  for (let town of resultArr) {
    console.log(town);
  }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
