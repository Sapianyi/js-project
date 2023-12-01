'use strict';

if (4 == 9) {
  console.log('Ok');
} else {
  console.log('No');
}

const num = 50;
if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Много');
} else {
  console.log('Ok');
}

const num2 = 50;
(num2 === 50) ? console.log('Ok') : console.log('Error');

const num3 = 60; //Проверка на строгое сравнение
switch (num3) {
  case 49:
    console.log('Неверно');
    break;
  case 100:
    console.log('Неверно');
    break;
  case 50:
    console.log('Ok');
    break;
  default:
    console.log('Err');
}