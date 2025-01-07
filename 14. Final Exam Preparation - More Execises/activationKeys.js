function activationKeys(arr) {
  let activationKey = arr.shift();

  let command = arr.shift();

  while (command) {
    if (command.startsWith('Contains')) {
      let [, substring] = command.split('>>>');
      if (activationKey.includes(substring)) {
        console.log(`${activationKey} contains ${substring}`);
      } else {
        console.log('Substring not found!');
      }
    } else if (command.startsWith('Flip')) {
      let [, type, startIndex, endIndex] = command.split('>>>');
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      if (type === 'Upper') {
        activationKey =
          activationKey.substring(0, startIndex) +
          activationKey.substring(startIndex, endIndex).toUpperCase() +
          activationKey.substring(endIndex);
      } else if (type === 'Lower') {
        activationKey =
          activationKey.substring(0, startIndex) +
          activationKey.substring(startIndex, endIndex).toLowerCase() +
          activationKey.substring(endIndex);
      }
      console.log(activationKey);
    } else if (command.startsWith('Slice')) {
      let [, startIndex, endIndex] = command.split('>>>');
      activationKey =
        activationKey.substring(0, startIndex) +
        activationKey.substring(endIndex);
      console.log(activationKey);
    }

    command = arr.shift();
  }

  console.log(`Your activation key is: ${activationKey}`);
}

activationKeys([
  'abcdefghijklmnopqrstuvwxyz',
  'Slice>>>2>>>6',
  'Flip>>>Upper>>>3>>>14',
  'Flip>>>Lower>>>5>>>7',
  'Contains>>>def',
  'Contains>>>deF',
  'Generate',
]);

activationKeys([
  '134softsf5ftuni2020rockz42',
  'Slice>>>3>>>7',
  'Contains>>>-rock',
  'Contains>>>-uni-',
  'Contains>>>-rocks',
  'Flip>>>Upper>>>2>>>8',
  'Flip>>>Lower>>>5>>>11',
  'Generate',
]);
