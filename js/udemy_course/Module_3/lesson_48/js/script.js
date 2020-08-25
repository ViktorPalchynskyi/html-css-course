"use strict";

// filter

// const names = ['Ivan', 'Ann', 'Viktor', 'Voldemart'];

// const shortNames = names.filter(name => name.length < 5);

// console.log(shortNames);

// map 

// let answers = ['IvAn', 'AnnA', 'HEllO'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// every/some

// const some = [4, 'aldsjf', 'czxcb'];

// console.log(some.some(item => typeof (item) === 'number'));

// console.log(some.every(item => typeof (item) === 'number'));

// const arr = [4, 5, 6, 1, 3, 2, 12];

// const res = arr.reduce((summ, curent) => summ + curent);

// console.log(res);


// const fruits = ['apple', 'pear', 'plum'];

// const res = fruits.reduce((sum, curent) => `${sum}, ${curent}`);

// console.log(res);

const obj = {
   iven: 'persone',
   ann: 'persone',
   dog: 'animal',
   cat: 'animal'
};

const newArr = Object.entries(obj)
   .filter(obj => obj[1] === 'persone')
   .map(obj => obj[0]);

console.log(newArr);