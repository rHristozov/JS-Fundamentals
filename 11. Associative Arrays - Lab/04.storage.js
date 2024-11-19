function storage(arr) {
  let storageMap = new Map();

  for (const line of arr) {
    let [product, quantity] = line.split(' ');
    quantity = Number(quantity);

    if (storageMap.has(product)) {
      let currentQuantity = storageMap.get(product);
      quantity += currentQuantity;
    }
    storageMap.set(product, quantity);
  }
  for (let [product, quantity] of storageMap) {
    console.log(`${product} -> ${quantity}`);
  }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
