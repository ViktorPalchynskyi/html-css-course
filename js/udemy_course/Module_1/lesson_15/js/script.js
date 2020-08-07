"use strict";

const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   },
   makeTest: function () {
      console.log("Test");
   }
};

options.makeTest();

const {
   border,
   bg
} = options.colors;

console.log(border);
console.log(bg);

// console.log(options['colors']['bg']);

// delete options.name;

// console.log(options.name);

// let counter = 0;
// for (let key in options) {
//    if (typeof (options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`Property ${i} has value ${options[key][i]}`);
//       }
//    } else {
//       console.log(`Peoperty ${key} has value ${options[key]}`);
//    }
//    counter++;
// }
// console.log(counter);

console.log(Object.keys(options).length);
console.log(Object.values(options));