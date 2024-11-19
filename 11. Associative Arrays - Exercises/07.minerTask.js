function minerTask(arr) {
  let items = {};

  for (let i = 0; i < arr.length; i += 2) {
    let material = arr[i];
    let quantity = +arr[i + 1];

    if (material in items) {
      items[material] += quantity;
    } else {
      items[material] = quantity;
    }
  }
  let entries = Object.entries(items);
  for (const [material, quantity] of entries) {
    console.log(`${material} -> ${quantity}`);
  }
}

minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
