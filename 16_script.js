'use strict';

//Функции

function showFirstMessage() { //Объявление функции
  console.log('Hello World!');
}
showFirstMessage(); //Вызов функции
//______________________________________
function showFirstMessage2(text) { //в скобках      указывать аргумент, их может быть много
  console.log(text);
  let num = 10;//Локальная переменная, только внутри функции
}
showFirstMessage2('Hello World!'); //
//________________________________________
let num2 = 20; //глобальная переменная
function showFirstMessage3(text) { //
  console.log(text);
  num2 = 10;//функция изменит глобальную переменную
}
showFirstMessage3('Hello World!'); //
console.log(num2);
//__________________________________________
let num3 = 30; //
function showFirstMessage4(text) { //
  console.log(text);
  let num3 = 25;//
  console.log(num3);
}
showFirstMessage4('Hello World!'); //
console.log(num3);
//___________________________________________
function calc(a, b) {
  return (a + b);//после return ничего не будет исполнятся
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 2));//Функцию мщжно использовать много раз
//__________________________________________
function ret() {
  let num4 = 50;
  //
  //  Здесь может біть большой код по работе с переменной
  //
  return num4;
}
const anotherNum = ret();//помещаем результат работі функции в переменную anotherNum
console.log(anotherNum);
//__________________________________________
const logger = function () {//такая функция создается когда к ней доходит поток
  console.log('OK!');
};
logger();
//_________________________________________
const calc2 = (a, b) => a + b;//Стрелочная функция. Переменная, аргументы функции, действие функции
//_________________________________________
const calc3 = (a, b) => {//если функция большая
  console.log('1');
  return a + b;
};
//________________________________________