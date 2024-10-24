function convertToObject(stringJSON) {
  let obj = JSON.parse(stringJSON);
  for (const key in obj) {
    let value = obj[key];
    console.log(`${key}: ${value}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
