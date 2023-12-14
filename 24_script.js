/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// let numberOfFilms;

// const personalMovieDB = {
//   start: function () {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//   },
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' & b != '' & a.length < 50) {
//       personalMovieDB.movies[a] = b;
//     } else {
//       i--;
//     }
//   }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       alert("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count > 30) {
//       alert("Вы киноман");
//     } else {
//       alert("Вы классический зритель");
//     }
//   },
//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   writeYourGenres: function () {
//     for (let i = 1; i <= 3; i++) {
//       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
//   }
// };

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();

// const arr = [...personalMovieDB.genres];
// console.log(arr);
// arr.forEach(function (item, i, arr) {
//   console.log(`Любимый жанр # ${i} - это ${item}`);
// });
//____________________________
//____________________________
//____________________________


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' & b != '' & a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Вы классический зритель");
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre == '' || genre == null){
        console.log('ERR!!');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) =>{
      console.log(`Любимый жанр # ${i + 1} - это ${item}`);
    });
  }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();


