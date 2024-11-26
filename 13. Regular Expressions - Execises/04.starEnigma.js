function starEnigma(arr) {
  let messageCount = Number(arr.shift());
  let patternStar = /[star]/gi;
  let decryptedMessages = [];
  for (let i = 0; i < messageCount; i++) {
    let encryptedMessage = arr[i];
    let matches = encryptedMessage.match(patternStar);

    let matchCount = matches ? matches.length : 0;
    let decryptedMessage = '';

    for (let symbol of encryptedMessage) {
      let ascii = symbol.charCodeAt();
      ascii -= matchCount;
      let newSymbol = String.fromCharCode(ascii);
      decryptedMessage += newSymbol;
    }
    decryptedMessages.push(decryptedMessage);
  }

  let attackedPlanets = [];
  let destroyedPlanets = [];

  let patternPlanet =
    /@(?<name>[A-Za-z]+)[^@!\-:>]*:\d+[^@!\-:>]*!(?<type>[AD])![^@!\-:>]*->\d+/;
  for (let planet of decryptedMessages) {
    let match = patternPlanet.exec(planet);
    if (match) {
      let { name, type } = match.groups;
      if (type === 'A') {
        attackedPlanets.push(name);
      } else {
        destroyedPlanets.push(name);
      }
    }
  }
  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  for (let planet of attackedPlanets) {
    console.log(`-> ${planet}`);
  }
  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  for (let planet of destroyedPlanets) {
    console.log(`-> ${planet}`);
  }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma([
  '3',
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR',
]);
