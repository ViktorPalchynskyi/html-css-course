"use strict";

let str = 'some';
let strOnj = new String(str);


// console.log(typeof (str));
// console.log(typeof (strOnj));

console.dir([1, 2, 3]);

const soldier = {
   health: 400,
   armor: 100,
   sayHello: () => console.log('Hello')
};

const john = Object.create(soldier);

// const john = {
//    health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

console.log(john.armor);
john.sayHello();