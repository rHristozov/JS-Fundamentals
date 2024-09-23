function triangleArea(a, b, c) {
  let s = (1 / 2) * (a + b + c);
  let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(A);
}

triangleArea(2, 3.5, 4);
