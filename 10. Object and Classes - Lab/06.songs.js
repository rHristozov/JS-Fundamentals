function songs(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let n = arr.shift();
  let favList = arr.pop();
  let arrOfSongs = [];

  for (let i = 0; i < n; i++) {
    let temp = arr[i].split('_');
    let typeList = temp[0];
    let name = temp[1];
    let time = temp[2];

    let newSong = new Song(typeList, name, time);
    arrOfSongs.push(newSong);
  }

  for (let i = 0; i < arrOfSongs.length; i++) {
    if (favList === 'all') {
      console.log(arrOfSongs[i].name);
    } else if (favList === arrOfSongs[i].typeList) {
      console.log(arrOfSongs[i].name);
    }
  }
}

songs([
  3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite',
]);
