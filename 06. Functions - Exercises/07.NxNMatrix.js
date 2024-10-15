function NxNMatrix(number) {
  let print = '';
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      print += number + ' ';
    }
    print += '\n';
  }
  console.log(print);
}

NxNMatrix(7);
