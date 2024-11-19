function partyTime(arr) {
  let index = arr.indexOf('PARTY');
  let reservationList = arr.slice(0, index);
  let guestList = arr.slice(index + 1);
  let leftVip = [];
  let leftNormal = [];

  for (const guest of guestList) {
    if (reservationList.indexOf(guest) > -1) {
      let index = reservationList.indexOf(guest);
      reservationList.splice(index, 1);
    }
  }

  reservationList.map(function (e) {
    if (!isNaN(Number(e[0]))) {
      leftVip.push(e);
    } else {
      leftNormal.push(e);
    }
  });

  console.log(reservationList.length);

  for (const guest of leftVip) {
    console.log(guest);
  }
  for (const guest of leftNormal) {
    console.log(guest);
  }
}

partyTime([
  '7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
]);
