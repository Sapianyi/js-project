'use strict';

let a = 5,
    b = a;
b = b + 5;
console.log(b);
console.log(a);
//_____________________

//Копия объекта
function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);//Копия поменяет значение "а"
console.log(numbers);//Оригинал не изменится

//это поверхносная копия. значения "с" будет меняться в обоих объектах
//___________________________

//Объединение объектов
const add = {
  d: 17,
  e: 20
};

console.log(Object.assign(numbers, add));//Объеденит все в объект numbers
//___________________________
//тоже создает копию объекта и меняет в копии значения
const add2 = {
  d: 17,
  e: 20
};

const clone = Object.assign({}, add2);
clone.d = 20;
console.log(add2);
console.log(clone);
//_____________________________

//Копия массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'www';

console.log(newArray);
console.log(oldArray);
//_____________________________

//Оператор разворота. 
const video = ['youtube', 'vimeo', 'home'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'fb', 'twitter'];

console.log(internet);
//_____________________________

//Разлаживает пришедший массив из num на составляющие и добавляет в аргументы функции log.
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 7];

log(...num);
//_____________________________

//Копия при помощи спред- оператора
const array = ['a', 'b'];
const newAaray = [...array];
//____________________________

const q = {
  one: 1,
  two: 2
};
const newObj = {...q};
