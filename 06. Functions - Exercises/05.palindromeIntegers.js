function palindromeIntegers(arr) {
  function isPalindrome(number) {
    let stringNumber = number + '';
    let reversedNumber = stringNumber.split('').reverse().join('');

    return stringNumber === reversedNumber;
  }

  for (let el of arr) {
    console.log(isPalindrome(el));
  }
}

palindromeIntegers([123, 323, 421, 121]);
