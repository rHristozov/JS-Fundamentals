function addressBook(arr) {
  let addressBookObj = {};

  for (let line of arr) {
    let [name, address] = line.split(':');
    addressBookObj[name] = address;
  }

  let entries = Object.entries(addressBookObj);
  entries.sort(([keyA, valueA], [keyB, valueB]) => {
    return keyA.localeCompare(keyB);
  });

  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

addressBook([
  'Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd',
]);
