'use strict';

//Цыклы
//__________________
let num = 70;
while (num <= 75) {
  console.log(num);
  num++;
}
//___________________
let num2 = 50;
do {
  console.log(num2);
  num2++;
}
while (num2 < 55);
//___________________________
for (let i = 1; i < 8; i++) {//задал переменную;предел цикла;добавляю к i по 1 пока не будет 7
  console.log(i);// как только 7 цикл остановит console.log
}
//_________________________
let num3 = 10;
for (let i = 1; i < 8; i++) {//К переменной num3 будет добавляться по 1 пока i не дойдет до предела (7)
  console.log(num3);
  num3++
}
//_________________________
for (let i = 1; i < 8; i++) {
  if(i === 5){//при условии когда i будет 5 цикл прервется
    break;
  }
  console.log(i);
}
//________________________
for (let i = 1; i < 8; i++) {
  if (i === 5) {//при условии когда i будет 5 цикл пропустит 5 и пойдет дальше
    continue;
  }
  console.log(i);
}