'use strict';

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function (){
      personalMovieDB.count = +prompt('Скільки фільмів ти вже подивився?', '');

      while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
         personalMovieDB.count = +prompt('Скільки фільмів ти вже подивився?', '');
      }
      console.log(personalMovieDB);
   },
   rememberMyFilms: function(){
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
      console.log(personalMovieDB);
   },
   detectedPersonalLevel: function(){
      if(personalMovieDB.count < 10){
         console.log('Ви подивились доволі мало фільмів');
      } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
         console.log('Ви класичний глядач');
      } else if (personalMovieDB.count > 30){
         console.log('Ви кіноман');
      } else {
         console.log('Щось пішло не так!');
      }
   },
   showMyDB: function(hidden){
      if(!hidden){
         console.log(personalMovieDB);
      }
   },
   writeYourGenres: function(){
      for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
        if(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == ''){
           i--;
        }
      }
      personalMovieDB.genres.forEach((item, i) => console.log(`Любимый жанр №${i+1} - это ${item}`));
   },
   toggleVisibleMyDB: function(){
      if(!personalMovieDB.privat){
         personalMovieDB.privat = true;
      } else {
         personalMovieDB.privat = false;
      }
   }
};