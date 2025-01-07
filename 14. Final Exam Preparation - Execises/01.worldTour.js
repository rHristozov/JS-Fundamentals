function worldTour(arr) {
  let destinations = arr.shift();
  let command = arr.shift();

  while (command !== 'Travel') {
    if (command.startsWith('Add')) {
      let [, index, str] = command.split(':');
      index = Number(index);
      if (index >= 0 && index < destinations.length) {
        let arr = destinations.split('');
        arr.splice(index, 0, ...str);
        destinations = arr.join('');
      }
    } else if (command.startsWith('Remove')) {
      let [, startIndex, endIndex] = command.split(':');
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);

      if (startIndex >= 0 && endIndex < destinations.length) {
        stringToRemove = destinations.substring(startIndex, endIndex + 1);
        destinations = destinations.replace(stringToRemove, '');
      }
    } else if (command.startsWith('Switch')) {
      let [, oldString, newString] = command.split(':');
      if (destinations.includes(oldString)) {
        destinations = destinations.replace(oldString, newString);
      }
    }
    console.log(destinations);
    command = arr.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${destinations}`);
}

worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
]);
