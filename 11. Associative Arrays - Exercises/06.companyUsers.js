function companyUsers(arr) {
  let companies = {};
  for (let line of arr) {
    let [company, id] = line.split(' -> ');

    if (company in companies) {
      if (!companies[company].includes(id)) {
        companies[company].push(id);
      }
    } else {
      companies[company] = [id];
    }
  }

  let entries = Object.entries(companies).sort(
    ([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB)
  );

  for (let [key, value] of entries) {
    console.log(`${key}`);
    for (let id of value) {
      console.log(`-- ${id}`);
    }
  }
}

companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> CC12344',
  'Lenovo -> XX23456',
  'SoftUni -> AA12345',
  'Movement -> DD11111',
]);
