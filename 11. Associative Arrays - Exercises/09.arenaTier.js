function arenaTier(arr) {
  let gladiators = {};
  for (prompt of arr) {
    let line = prompt.split(' ');

    if (line.length === 5) {
      let name = line[0];
      let skillName = line[2];
      let skillPoints = +line[4];

      if (!gladiators.hasOwnProperty(name)) {
        gladiators[name] = {
          totalSkill: skillPoints,
          technique: { [skillName]: skillPoints },
        };
      } else {
        if (gladiators[name].technique.hasOwnProperty(skillName)) {
          let currentSkill = gladiators[name].technique[skillName];
          if (currentSkill < skillPoints) {
            gladiators[name].technique[skillName] = skillPoints;
            gladiators[name].totalSkill +=
              gladiators[name].technique[skillName] - currentSkill;
          }
        } else {
          gladiators[name].totalSkill += skillPoints;
          gladiators[name].technique[skillName] = skillPoints;
        }
      }
    }

    if (line.length === 3) {
      let firstGladiator = line[0];
      let secondGladiator = line[2];

      if (
        gladiators.hasOwnProperty(firstGladiator) &&
        gladiators.hasOwnProperty(secondGladiator)
      ) {
        for (let ft in gladiators[firstGladiator].totalSkill) {
          for (let st in gladiators[secondGladiator].totalSkill) {
            if (ft === st) {
              if (
                gladiators[firstGladiator].totalSkill >
                gladiators[secondGladiator].totalSkill
              ) {
                delete gladiators[secondGladiator];
              } else {
                delete gladiators[firstGladiator];
              }
            } else {
              continue;
            }
          }
        }
      } else {
        continue;
      }
    }
    if (line.length === 2) {
      break;
    }
  }

  let sorted = Object.entries(gladiators);
  sorted.sort(
    ([nameA, valueA], [nameB, valueB]) =>
      valueB.totalSkill - valueA.totalSkill || nameA.localeCompare(nameB)
  );

  for (let gladiator of sorted) {
    let totalSkillSort = Object.entries(gladiator[1]);

    console.log(`${gladiator[0]}: ${totalSkillSort[0][1]} skill`);

    let skillSort = Object.entries(totalSkillSort[1][1]);

    skillSort.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let skill of skillSort) {
      console.log(`- ${skill[0]} <!> ${skill[1]}`);
    }
  }
}

arenaTier([
  'Peter -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar',
]);

gladiators = {
  Stefan: {
    totalSkill: 450,
    technique: { tiger: 250, duck: 200, battlecry: 200, powerpunch: 300 },
  },
};
