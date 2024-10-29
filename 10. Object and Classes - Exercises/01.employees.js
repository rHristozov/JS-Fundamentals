function employees(arr) {
  for (employe of arr) {
    let employeObj = {
      name: employe,
      personalNumber: employe.length,
    };
    console.log(
      `Name: ${employeObj.name} -- Personal Number: ${employeObj.personalNumber}`
    );
  }
}

employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
]);
