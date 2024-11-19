function phoneBook(arr) {
  let phoneBookObj = {};

  for (let info of arr) {
    let [name, number] = info.split(' ');

    phoneBookObj[name] = number;
  }
  for (let key in phoneBookObj) {
    console.log(`${key} -> ${phoneBookObj[key]}`);
  }
}

phoneBook([
  'Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344',
]);
