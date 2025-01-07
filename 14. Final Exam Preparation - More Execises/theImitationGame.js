function theImitationGame(arr) {
  let decryptedMessage = arr.shift();

  let command = arr.shift();

  while (command !== 'Decode') {
    if (command.startsWith('Move')) {
      let [, count] = command.split('|');
      count = Number(count);
      decryptedMessage =
        decryptedMessage.substring(count) +
        decryptedMessage.substring(0, count);
    } else if (command.startsWith('Insert')) {
      let [, index, letter] = command.split('|');
      index = Number(index);
      decryptedMessage =
        decryptedMessage.substring(0, index) +
        letter +
        decryptedMessage.substring(index);
    } else if (command.startsWith('ChangeAll')) {
      let [, substring, replacement] = command.split('|');
      decryptedMessage = replaceAllStrings(
        decryptedMessage,
        substring,
        replacement
      );
    }
    command = arr.shift();
  }
  console.log(`The decrypted message is: ${decryptedMessage}`);

  function replaceAllStrings(decryptedMessage, substring, replacement) {
    while (decryptedMessage.includes(substring)) {
      decryptedMessage = decryptedMessage.replace(substring, replacement);
    }
    return decryptedMessage;
  }
}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);

theImitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);
