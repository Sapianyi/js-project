'use strict';

//Методы массива
const arr = [1, 2, 3, 6, 8];
arr.pop();//Удаляет последний элемент из массива
console.log(arr);
//________________________
arr.push(10);//Добавляет єлемент в конец массива
console.log(arr);
//________________________

//arr[99] = 0;//Задает на 99 позицию элемент 0
//________________________

for (let i = 0; i < arr.length; i++){//Переборка массива
  console.log(arr[i]);
}
//________________________

for (let value of arr) {//Тоже перебирает массив
  console.log(value);
}
//________________________

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});
//________________________

const str = prompt('', '');
const products = str.split(', ');
console.log(products);//На основе строки создать массив
//________________________
const str2 = prompt('', '');
const products2 = str2.split(', ');
products2.sort();//отсортирует данные в массиве по алфавиту. Сортирует данные как строки
console.log(products2);
//________________________

//Отсортировать числовые данные в массиве
const arr2 = [2, 26, 13, 8, 35];
arr2.sort(compareNum);
console.log(arr2);
function compareNum(a, b) {
  return a - b;
}
//_________________________