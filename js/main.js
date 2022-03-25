const numberOfFilms = +prompt('Скільки фільмів ти вже подивився?', '');
let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Який фільм?',''),
      b = prompt(`Оцінка ${a}`,'');

personalMovieDB.movies[a] = +b;
console.log(personalMovieDB);
