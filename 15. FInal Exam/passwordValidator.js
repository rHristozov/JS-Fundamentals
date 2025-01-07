function passwordValidator(arr) {
  let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/;

  let count = Number(arr.shift());

  for (let i = 0; i < count; i++) {
    let match = arr[i].match(pattern);

    if (match) {
      let result = `${match[1]}: `;
      for (const char of match[2]) {
        result += char.charCodeAt() + ' ';
      }
      console.log(result);
    } else {
      console.log('The message is invalid');
    }
  }
}

passwordValidator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready']);

passwordValidator([
  '3',
  'go:[outside]',
  '!drive!:YourCarToACarWash',
  '!Watch!:[LordofTheRings]',
]);
