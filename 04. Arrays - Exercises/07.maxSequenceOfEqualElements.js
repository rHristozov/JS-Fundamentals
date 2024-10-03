function maxSequenceOfEqualElements(arr) {
  let longestSeq = [];
  let currentSeq = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];

    if (currentElement === currentSeq[0]) {
      currentSeq.push(currentElement);

      if (currentSeq.length > longestSeq.length) {
        longestSeq = currentSeq;
      }
    } else {
      currentSeq = [currentElement];
    }
  }
  console.log(longestSeq.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
