function sortAnArrayBy2Criteria(arr) {
  function compareFn(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      return a.localeCompare(b);
    }
  }
  arr.sort(compareFn);
  console.log(arr.join('\n'));
}

sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
