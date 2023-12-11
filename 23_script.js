'use strict';

//ООП

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello!!!');
  }
};

const jonh = Object.create(soldier);

jonh.sayHello();