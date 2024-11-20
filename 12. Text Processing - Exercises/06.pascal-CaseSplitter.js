function pascalCaseSplitter(str) {
  let strArr = str.split(/(?=[A-Z])/);
  console.log(strArr.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
