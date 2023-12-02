/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

//Моя
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// switch (personalMovieDB.count) {
//   case 0:
//     console.log('Неверно');
//     break;
//   default:
//     for (let i = 1; i <= numberOfFilms; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = +prompt('На сколько оцените его?', '');

//                 if (a == 0 || b == 0 || a.length >= 5) {
//                   i--;
//                   console.log('No');
//                 }
//                  else {
//                   personalMovieDB.movies[a] = b;
//                   console.log('Ok');
//                 }
//     }
// };

// if (personalMovieDB.count < 10) {
//   alert("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count > 30) {
//   alert("Вы киноман");
// } else {
//   alert("Вы классический зритель",);
// };

//______________________________________________________
//Петриченко
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


for (let i = 0; i < 2; i++){
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = +prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' & b != '' & a.length < 50){
          personalMovieDB.movies[a] = b;
        } else {
          i--;
        }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Вы классический зритель");
  }
console.log(personalMovieDB);