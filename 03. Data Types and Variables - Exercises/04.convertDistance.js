function convertDistance(meters) {
  let kiloMeters = meters / 1000;
  let miles = kiloMeters * 0.621371;

  console.log(`${meters} meters is equal to ${kiloMeters} kilometers.`);
  console.log(
    `${kiloMeters} kilometers is equal to ${miles.toFixed(2)} miles.`
  );
}
convertDistance(1852);
