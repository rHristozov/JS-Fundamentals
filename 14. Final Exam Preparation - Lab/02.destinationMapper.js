function destinationMapper(str) {
  let pattern = /([\=|\/])([A-Z][A-Za-z]{2,})(\1)/g;
  let matches = Array.from(str.matchAll(pattern));

  let travelPoints = 0;
  let destinations = [];

  for (const match of matches) {
    destinations.push(match[2]);
    travelPoints += match[2].length;
  }
  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
