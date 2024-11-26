function netherRealms(str) {
  let demonsNames = str.split(/\s*,\s*/);

  let healthPattern = /[^0-9+\-*\/.]/g;
  let baseDamagePattern = /[+-]?\d+(\.\d+)?/g;
  let damageModifyPattern = /[*\/]/g;
  let demons = {};

  for (let name of demonsNames) {
    let health = 0;
    let healthMatches = name.match(healthPattern);
    if (healthMatches) {
      healthMatches.forEach((element) => {
        health += element.charCodeAt();
      });
    }
    let baseDamageMatches = name.match(baseDamagePattern);
    let baseDamage = 0;
    if (baseDamageMatches) {
      baseDamage = baseDamageMatches
        .map(Number)
        .reduce((prev, curr) => prev + curr, 0);
    }
    let damageModifyMatches = name.match(damageModifyPattern);
    if (damageModifyMatches) {
      for (let operator of damageModifyMatches) {
        if (operator === '*') {
          baseDamage *= 2;
        } else {
          baseDamage /= 2;
        }
      }
    }

    demons[name] = { health, baseDamage };
  }
  let sortedDemons = Object.entries(demons).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (const [demonName, demonProperties] of sortedDemons) {
    console.log(
      `${demonName} - ${
        demonProperties.health
      } health, ${demonProperties.baseDamage.toFixed(2)} damage`
    );
  }
}

netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
// netherRealms('Gos/ho');
