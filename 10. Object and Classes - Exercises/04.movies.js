function movies(arr) {
  let moviesArr = [];

  for (let el of arr) {
    if (el.includes('addMovie')) {
      let newMovie = {
        name: el.split('addMovie ')[1],
      };
      moviesArr.push(newMovie);
    } else {
      if (el.includes('directedBy')) {
        let [movie, director] = el.split(' directedBy ');

        let findMovie = moviesArr.find((mov) => mov.name === movie);

        if (findMovie) {
          findMovie.director = director;
        }
      } else if (el.includes('onDate')) {
        let [movie, date] = el.split(' onDate ');

        let findMovie = moviesArr.find((mov) => mov.name === movie);

        if (findMovie) {
          findMovie.date = date;
        }
      }
    }
  }

  for (let movie of moviesArr) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}

movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen',
]);
