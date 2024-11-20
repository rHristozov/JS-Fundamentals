function cutAndReverse(str) {
  let half = str.length / 2;
  let firstWord = str.split('').reverse().join('').substring(half);
  let secondWord = str.split('').reverse().join('').substring(0, half);

  // let firstHalf = reversed.substring(half);
  // let secondHalf = reversed.substring(0, half);
  console.log(firstWord);
  console.log(secondWord);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
