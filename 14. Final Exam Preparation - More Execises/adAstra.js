function adAstra(arr) {
  let text = arr[0];
  let totalCalories = 0;

  let pattern =
    /([#|\|])(?<name>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g;

  let matches = Array.from(text.matchAll(pattern));
  for (const match of matches) {
    totalCalories += +match[4];
  }
  let days = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  for (const match of matches) {
    console.log(
      `Item: ${match[2]}, Best before: ${match[3]}, Nutrition: ${match[4]}`
    );
  }
}

// adAstra([
//   '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
// ]);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
