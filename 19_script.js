'use strict';

//Callback функции

function first() {
  //Здесь выполняются какие то действия...
   setTimeout(function(){//Задержка выполнения на 0.5секунды
      console.log(1);
   }, 500);
}
function second() {
  console.log(2);
}
first();
second();//При выполнении сначала выведит 2 затем 1
//____________________________

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}
learnJS('JavaScript', function () {
  console.log('Я прошел этот урок');
});
//____________________________

function learnJS2(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}
function done() {
  console.log('Я прошел этот урок');
}
learnJS2('JavaScript', done);
//____________________________