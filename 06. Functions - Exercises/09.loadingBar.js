function loadingBar(num) {
  let step = num / 10;

  let percentage = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];

  function printingPercentage(step) {
    for (let i = 0; i < step; i++) {
      percentage[i] = '%';
    }
  }
  printingPercentage(step);

  if (step < 10) {
    console.log(`${num}% [${percentage.join('')}]`);
    console.log('Still loading...');
  } else {
    console.log(`${num}% Complete!`);
    console.log(`[${percentage.join('')}]`);
  }
}

loadingBar(100);
