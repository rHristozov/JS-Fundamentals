function googleSearches(arr) {
  let input = arr.map(Number);
  let moneyPerSearch = input.shift();
  let numberOfUsers = input.shift();
  let sum = 0;
  let count = 1;

  for (let currentSearch of input) {
    let currentSum = 0;
    if (count % 3 === 0) {
      if (currentSearch === 1) {
        count++;
        continue;
      }
      if (currentSearch > 5) {
        currentSum = currentSearch * (moneyPerSearch * 3) * 2;
      } else {
        currentSum = currentSearch * moneyPerSearch * 3;
      }
    } else if (currentSearch === 1) {
      count++;
      continue;
    } else if (currentSearch > 5) {
      currentSum = currentSearch * moneyPerSearch * 2;
    } else {
      currentSum = currentSearch * moneyPerSearch;
    }
    sum += currentSum;
    count++;
  }
  console.log(`Total money earned: ${sum.toFixed(2)}`);
}

googleSearches(['5.5', '3', '1', '10', '5']);
