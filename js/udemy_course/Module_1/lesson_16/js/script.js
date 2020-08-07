"use strict";

const arr = [14, 24, 23, 16, 48];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
   return a - b;
}
// arr[99] = 0;

// console.log(arr.length);
// arr.pop();
// arr.push(10);

// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
// }

// for (let value of arr) {
//    console.log(value);
// }

// arr.forEach((item, n, arr) => {
//    console.log(`${n}: ${item} inside array ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));