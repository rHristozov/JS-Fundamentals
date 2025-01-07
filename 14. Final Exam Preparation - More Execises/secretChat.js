function secretChat(arr) {
  let message = arr.shift();

  let command = arr.shift();

  while (command !== 'Reveal') {
    if (command.startsWith('InsertSpace')) {
      let [, index] = command.split(':|:');
      message = message.substring(0, index) + ' ' + message.substring(index);
      console.log(message);
    } else if (command.startsWith('Reverse')) {
      let [, substring] = command.split(':|:');
      if (message.includes(substring)) {
        let index = message.indexOf(substring);
        let count = index + substring.length;
        let cut = message.substring(index, count).split('').reverse().join('');
        message = message.substring(0, index) + cut;
        console.log(message);
      } else {
        console.log('error');
      }
    } else if (command.startsWith('ChangeAll')) {
      let [, substring, replacement] = command.split(':|:');
      message = replaceAllStrings(message, substring, replacement);
      console.log(message);
    }

    command = arr.shift();
  }

  console.log(`You have a new text message: ${message}`);

  function replaceAllStrings(message, substring, replacement) {
    while (message.includes(substring)) {
      message = message.replace(substring, replacement);
    }
    return message;
  }
}

// secretChat([
//   'heVVodar!gniV',
//   'ChangeAll:|:V:|:l',
//   'Reverse:|:!gnil',
//   'InsertSpace:|:5',
//   'Reveal',
// ]);
secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal',
]);
