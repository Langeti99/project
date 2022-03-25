'use strict';

let numberOfFilms;

function start(){
   numberOfFilms = +prompt('Скільки фільмів ти вже подивився?', '');

   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt('Скільки фільмів ти вже подивився?', '');
   }
}
start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms(){
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
}
// rememberMyFilms();

function detectedPersonalLevel(){
   if(personalMovieDB.count < 10){
      console.log('Ви подивились доволі мало фільмів');
   } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Ви класичний глядач');
   } else if (personalMovieDB.count > 30){
      console.log('Ви кіноман');
   } else {
      console.log('Щось пішло не так!');
   }
}
// detectedPersonalLevel();

function showMyDB(hidden){
   if(!hidden){
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
   for(let i = 0; i < 3; i++){
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
   }
}
writeYourGenres();