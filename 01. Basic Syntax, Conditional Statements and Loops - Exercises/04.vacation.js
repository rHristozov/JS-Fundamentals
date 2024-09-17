function vacation(groupOfPeople, typeOfGroup, dayOfTheWeek) {
  let totalPrice = 0;
  if (typeOfGroup === 'Students') {
    if (dayOfTheWeek === 'Friday') {
      totalPrice = groupOfPeople * 8.45;
    } else if (dayOfTheWeek === 'Saturday') {
      totalPrice = groupOfPeople * 9.8;
    } else if (dayOfTheWeek === 'Sunday') {
      totalPrice = groupOfPeople * 10.46;
    }
    if (groupOfPeople >= 30) {
      totalPrice *= 0.85;
    }
  } else if (typeOfGroup === 'Business') {
    if (groupOfPeople >= 100) {
      groupOfPeople -= 10;
    }
    if (dayOfTheWeek === 'Friday') {
      totalPrice = groupOfPeople * 10.9;
    } else if (dayOfTheWeek === 'Saturday') {
      totalPrice = groupOfPeople * 15.6;
    } else if (dayOfTheWeek === 'Sunday') {
      totalPrice = groupOfPeople * 16;
    }
  } else if (typeOfGroup === 'Regular') {
    if (dayOfTheWeek === 'Friday') {
      totalPrice = groupOfPeople * 15;
    } else if (dayOfTheWeek === 'Saturday') {
      totalPrice = groupOfPeople * 20;
    } else if (dayOfTheWeek === 'Sunday') {
      totalPrice = groupOfPeople * 22.5;
    }
    if (groupOfPeople >= 10 && groupOfPeople <= 20) {
      totalPrice *= 0.95;
    }
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40, 'Regular', 'Saturday');
