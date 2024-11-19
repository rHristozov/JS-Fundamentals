function meetings(arr) {
  let meetingObj = {};

  for (let info of arr) {
    let [day, name] = info.split(' ');
    if (meetingObj.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetingObj[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (const [key, value] of Object.entries(meetingObj)) {
    console.log(`${key} -> ${value}`);
  }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
