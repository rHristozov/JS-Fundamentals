function inventory(arr) {
  let heroes = [];

  for (let el of arr) {
    let [name, level, items] = el.split(' / ');
    let heroObj = {
      name,
      level: Number(level),
      items,
    };
    heroes.push(heroObj);
  }
  sortedHeroes = heroes.sort((a, b) => a.level - b.level);
  for (let hero of sortedHeroes) {
    console.log(
      `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
    );
  }
}

inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
