function legendaryFarming(str) {
  let legendary = {
    fragments: 0,
    motes: 0,
    shards: 0,
  };
  let junk = {};

  let input = str.split(' ');

  for (i = 0; i < input.length; i += 2) {
    let quantity = +input[i];
    let item = input[i + 1].toLowerCase();

    if (item === 'shards' || item === 'motes' || item === 'fragments') {
      legendary[item] += quantity;
      if (legendary[item] >= 250) {
        if (item === 'motes') {
          console.log('Dragonwrath obtained!');
        } else if (item === 'shards') {
          console.log('Shadowmourne obtained!');
        } else {
          console.log('Valanyr obtained!');
        }
        legendary[item] -= 250;
        break;
      }
    } else {
      if (junk.hasOwnProperty(item)) {
        junk[item] += quantity;
      } else {
        junk[item] = quantity;
      }
    }
  }
  let sortedLegendary = Object.entries(legendary);
  sortedLegendary.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  for (const [name, quantity] of sortedLegendary) {
    console.log(`${name}: ${quantity}`);
  }

  let sortedJunk = Object.entries(junk);
  sortedJunk.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, quantity] of sortedJunk) {
    console.log(`${name}: ${quantity}`);
  }
}

legendaryFarming(
  '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
);
