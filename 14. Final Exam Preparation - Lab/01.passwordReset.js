function passwordReset(arr) {
  let newPassword = arr.shift();
  let newText = '';

  let command = arr.shift();
  while (command !== 'Done') {
    if (command === 'TakeOdd') {
      for (let i = 1; i < newPassword.length; i += 2) {
        newText += newPassword[i];
      }
      newPassword = newText;
      console.log(newPassword);
    } else if (command.startsWith('Cut')) {
      let [, index, length] = command.split(' ');
      index = Number(index);
      length = Number(length);
      let endIndex = index + length;
      let substring = newPassword.substring(index, endIndex);
      newPassword = newPassword.replace(substring, '');

      console.log(newPassword);
    } else if (command.startsWith('Substitute')) {
      let [, search, replaced] = command.split(' ');
      if (newPassword.includes(search)) {
        newPassword = myReplaceAll(newPassword, search, replaced);
        console.log(newPassword);
      } else {
        console.log('Nothing to replace!');
      }
    }

    command = arr.shift();
  }

  function myReplaceAll(text, search, replaced) {
    let tempText = text;
    while (tempText.includes(search)) {
      tempText = tempText.replace(search, replaced);
    }
    return tempText;
  }

  console.log(`Your password is: ${newPassword}`);
}

passwordReset([
  'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
  'TakeOdd',
  'Cut 15 3',
  'Substitute :: -',
  'Substitute | ^',
  'Done',
]);
