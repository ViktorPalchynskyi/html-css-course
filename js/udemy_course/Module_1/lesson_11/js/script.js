"use strict";

let num = 20;

function showFirstMessage(text) {
   console.log(text);
   let num = 10;
   console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

// console.log(calc(20, 10));
// console.log(calc(12, 5));
// console.log(calc(176, 530));

// function calc(a, b) {
//    return (a + b);
// }

function ret() {
   let num = 50;
   return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
   console.log("Hello");
};

logger();

const calc = (a, b) => a + b;

function createCounter() {
   let counter = 0
   const myFunction = function () {
      counter = counter + 1
      return counter
   }
   return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)