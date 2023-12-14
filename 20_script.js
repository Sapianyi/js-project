'use strict';

//Методы объектов

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};
delete options.name;//удаляет name из объекта
console.log(options);
//__________________________

//Чтобы перебрать все что внутри объекта
for (let key in options) {
  console.log(`Свойство ${key} имеет значение ${options[key]}`);//выводит все что внутри объекта options, кроме объекта colors. выводит в строчном значении.
}
//__________________________
//Перебор объекта в объекте
for (let key2 in options) {
  if(typeof(options[key2]) == 'object'){
    for (let i in options[key2]){
      console.log(`Свойство ${i} имеет значение ${options[key2][i]}`);
    } 
  } else {
    console.log(`Свойство ${key2} имеет значение ${options[key2]}`);
  }
}
//__________________________
//Счетчик колличества свойств в объекте
let counter = 0;
for (let key3 in options) {
  if (typeof (options[key3]) == 'object') {
    for (let i2 in options[key3]) {
      console.log(`Свойство ${i2} имеет значение ${options[key3][i2]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key3} имеет значение ${options[key3]}`);
    counter++;
  }
}
console.log(counter);
//__________________________

console.log(Object.keys(options));//Выводит массив с ключами из объекта
console.log(Object.keys(options).length);//Выводит колличество ключей в объекта
//__________________________
//Создание метода вручную
const options2 = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log('TEST');
  }
};
options2.makeTest();//Запуск метода
//__________________________
//Деструктуризация объекта
const {border, bg} = options2.colors;//Вытащить части объекта в отдельные переменные
console.log(border);


