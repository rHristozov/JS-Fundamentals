function registration(arr) {
  let username = arr.shift();

  command = arr.shift();

  while (command !== 'Registration') {
    if (command.startsWith('Letters')) {
      let [, type] = command.split(' ');

      if (type === 'Lower') {
        username = username.toLowerCase();
      } else {
        username = username.toUpperCase();
      }
      console.log(username);
    }
    if (command.startsWith('Reverse')) {
      let [, startIndex, endIndex] = command.split(' ');
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      if (
        startIndex >= 0 &&
        endIndex > 0 &&
        startIndex < username.length &&
        endIndex < username.length
      ) {
        console.log(
          username
            .substring(startIndex, endIndex + 1)
            .split('')
            .reverse()
            .join('')
        );
      }
    } else if (command.startsWith('Substring')) {
      let [, str] = command.split(' ');
      if (username.includes(str)) {
        username = username.replace(str, '');
        console.log(username);
      } else {
        console.log(`The username ${username} doesn't contain ${str}.`);
      }
    } else if (command.startsWith('Replace')) {
      let [, char] = command.split(' ');
      if (username.includes(char)) {
        username = replaceAllStrings(username, char);
        console.log(username);
      }
    } else if (command.startsWith('IsValid')) {
      let [, char] = command.split(' ');
      if (username.includes(char)) {
        console.log('Valid username.');
      } else {
        console.log(`${char} must be contained in your username.`);
      }
    }
    command = arr.shift();
  }

  function replaceAllStrings(username, char) {
    while (username.includes(char)) {
      username = username.replace(char, '-');
    }
    return username;
  }
}

registration([
  'John',
  'Letters Lower',
  'Substring SA',
  'IsValid @',
  'Registration',
]);
