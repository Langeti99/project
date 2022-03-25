const numberOfFilms = +prompt('Скільки фільмів ти вже подивився?', '');
let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for(let i = 0; i < 2; i++){
   const a = prompt('Який фільм?',''),
         b = prompt(`Оцінка ${a}`,'');
   if( a != null && a != '' && a.length<50 && b != null && b != '' && b.length<50){
      personalMovieDB.movies[a] = +b;
      console.log('done');
   } else {
      console.log('no done');
      i--;
   }
}

if(personalMovieDB.count < 10){
   console.log('Ви подивились доволі мало фільмів');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
   console.log('Ви класичний глядач');
} else if (personalMovieDB.count > 30){
   console.log('Ви кіноман');
} else {
   console.log('Щось пішло не так!');
}

console.log(personalMovieDB);
