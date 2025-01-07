function passwordValidation(arr) {
  let password = arr.shift();

  let command = arr.shift();

  while (command !== 'Complete') {
    let [action] = command.split(' ');
    if (action === 'Make') {
      let [, type, index] = command.split(' ');
      index = Number(index);
      if (type === 'Upper') {
        password =
          password.substring(0, index) +
          password.charAt(index).toUpperCase() +
          password.substring(index + 1);
      } else if (type === 'Lower') {
        password =
          password.substring(0, index) +
          password.charAt(index).toLowerCase() +
          password.substring(index + 1);
      }
      console.log(password);
    } else if (action === 'Insert') {
      let [, index, char] = command.split(' ');
      index = Number(index);
      if (index >= 0 && index < password.length) {
        password = password.slice(0, index) + char + password.slice(index);
        console.log(password);
      }
    } else if (action === 'Replace') {
      let [, char, value] = command.split(' ');
      value = Number(value);
      if (password.includes(char)) {
        let charCodeIndex = password.indexOf(char);
        let charCode = password.charCodeAt(charCodeIndex);
        let newCharCode = charCode + value;
        let newChar = String.fromCharCode(newCharCode);

        password = replaceAllStrings(password, char, newChar);
        console.log(password);
      }
    } else if (action === 'Validation') {
      if (password.length < 8) {
        console.log('Password must be at least 8 characters long!');
      }
      let firstPattern = /^[a-zA-Z0-9_]+$/g;
      if (!firstPattern.test(password)) {
        console.log('Password must consist only of letters, digits and _!');
      }
      let secondPattern = /[A-Z]+/;
      if (!secondPattern.test(password)) {
        console.log('Password must consist at least one uppercase letter!');
      }
      let thirdPattern = /[a-z]+/;
      if (!thirdPattern.test(password)) {
        console.log('Password must consist at least one lowercase letter!');
      }
      let forthPattern = /[0-9]+/;
      if (!forthPattern.test(password)) {
        console.log('Password must consist at least one digit!');
      }
    }

    command = arr.shift();
  }

  function replaceAllStrings(password, char, newChar) {
    while (password.includes(char)) {
      password = password.replace(char, newChar);
    }
    return password;
  }
}

passwordValidation([
  '123444444444444444567As',
  'Add 2 p',
  'Insert 0 S',
  'Replace 4 1',
  'Validation',
  'Complete',
]);

// passwordValidation([
//   '123456789',
//   'Insert 3 R',
//   'Replace 5 15',
//   'Validation',
//   'Make Lower 3',
//   'Complete',
// ]);
