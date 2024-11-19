function schoolGrades(arr) {
  let gradesMap = new Map();

  for (const line of arr) {
    let [name, ...grades] = line.split(' ');
    grades = grades.map(Number);
    if (gradesMap.has(name)) {
      for (let grade of grades) {
        gradesMap.get(name).push(grade);
      }
    } else {
      gradesMap.set(name, grades);
    }
  }

  gradesMap = new Map(
    [...gradesMap.entries()].sort(([keyA, valueA], [keyB, valueB]) =>
      keyA.localeCompare(keyB)
    )
  );

  for (let [key, grades] of gradesMap) {
    let size = grades.length;
    let totalGrades = 0;
    for (let grade of grades) {
      totalGrades += grade;
    }
    let averageGrade = totalGrades / size;
    console.log(`${key}: ${averageGrade.toFixed(2)}`);
  }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
