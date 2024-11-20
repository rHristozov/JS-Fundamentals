function modernTimes(str) {
  let arr = str
    .split(' ')
    .filter((word) => word.startsWith('#') && word.length > 1);

  for (let hashtag of arr) {
    hashtag = hashtag.substring(1);
    let pattern = /^[A-Za-z]+$/;
    let result = pattern.test(hashtag);
    if (result) {
      console.log(hashtag);
    }
  }
}

modernTimes(
  'The symbol # is known #variously in English-speaking #regions as the #number sign'
);
