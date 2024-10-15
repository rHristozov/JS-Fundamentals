function passwordValidator(password) {
  let isValidLength = checkValidLength(password);
  let isAlphanumeric = checkAlphaNumeric(password);
  let hasMin2Digits = checkMin2Digit(password);

  if (isAlphanumeric && isValidLength && hasMin2Digits) {
    console.log('Password is valid');
  }

  function checkMin2Digit(password) {
    let pattern = /[0-9]{2,}/;

    if (pattern.test(password)) {
      return true;
    } else {
      console.log('Password must have at least 2 digits');
      return false;
    }
  }

  function checkAlphaNumeric(password) {
    let pattern = /^[A-Za-z0-9]+$/;

    if (pattern.test(password)) {
      return true;
    } else {
      console.log('Password must consist only of letters and digits');
      return false;
    }
  }

  function checkValidLength() {
    if (password.length >= 6 && password.length <= 10) {
      return true;
    } else {
      console.log('Password must be between 6 and 10 characters');
      return false;
    }
  }
}

passwordValidator('Pa$s$s');
