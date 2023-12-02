'use strict';

//Условия
if (4 == 9) {
  console.log('Ok');
} else {
  console.log('No');
}
//________________________
const num = 50;
if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Много');
} else {
  console.log('Ok');
}
//_______________________
const num2 = 50;
(num2 === 50) ? console.log('Ok') : console.log('Error');
//______________________
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