function softUniReception(arr) {
  input = arr.map((x) => Number(x));
  let firstEmployee = input[0];
  let secondEmployee = input[1];
  let thirdEmployee = input[2];

  let totalStudents = input[3];
  let studentsPerHour = firstEmployee + secondEmployee + thirdEmployee;
  count = 1;

  while (totalStudents > 0) {
    if (!(count % 4 === 0)) {
      totalStudents -= studentsPerHour;
    }
    count++;
  }
  console.log(`Time needed: ${count - 1}h.`);
}

softUniReception(['5', '6', '4', '20']);
