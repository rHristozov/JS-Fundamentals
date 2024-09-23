function ASCIICharacters(first, second, third) {
  let firstCode = first.charCodeAt();
  let secondCode = second.charCodeAt();
  let thirdCode = third.charCodeAt();

  console.log(`${third}${second}${first}`);
  console.log(`${thirdCode} ${secondCode} ${firstCode}`);
}

ASCIICharacters('a', 'b', 'c');
