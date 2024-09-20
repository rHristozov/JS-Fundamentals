function nextDay(year, month, day) {
  month--;
  day += 1;
  let date = new Date(year, month, day);
  let nDay = date.getDate();
  let nMonth = date.getMonth() + 1;
  let nYear = date.getFullYear();

  console.log(`${nYear}-${nMonth}-${nDay}`);
}

nextDay(2016, 9, 30);
// nextDay(2020, 3, 24);
// nextDay(2020, 12, 31);

//2016-10-1
