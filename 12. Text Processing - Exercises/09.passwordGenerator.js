function passwordGenerator(arr) {
  let [str1, str2, replacementStr] = arr;
  let concatenatedStr = str1 + str2;
  let vowels = ['a', 'e', 'o', 'i', 'u'];
  let index = 0;

  for (let letter of concatenatedStr) {
    if (vowels.includes(letter)) {
      let newLetter = replacementStr[index].toUpperCase();
      concatenatedStr = concatenatedStr.replace(letter, newLetter);
      index++;
      if (index >= replacementStr.length) {
        index = 0;
      }
    }
  }
  concatenatedStr = concatenatedStr.split('').reverse().join('');
  console.log(`Your generated password is ${concatenatedStr}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
