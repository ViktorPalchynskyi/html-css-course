// null, undefined, boolean, number, string, object, symbol, BigInt

// console.log(typeof Symbol('JS'));
// console.log(typeof function () {  });


// Приведение типов 
// let language = 'JS';

// if(language) { 
//    console.log('The best language is ',language);
// }

// '', 0, null, underfined, NaN, false
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function name(params) {
   
// }));

// String's and numbers

// console.log(1 + 2 + '2');
// console.log('2' + 1 + 0);
// console.log('2' * '2');
// console.log(null + 214); null приводит к 0
// console.log(undefined + 214);

// == vs ===

// console.log(2 == '2');
// console.log(undefined == null);
// console.log(undefined == 0);
// console.log(undefined == '');
// console.log(undefined == false);

// console.log('0' == false); // приводит к числу 

console.log(false == '');
console.log(false == []);
console.log(false == {});

console.log('' == 0);
console.log('' == []);
console.log('' == {});

console.log(0 == []);
console.log(0 == {});
console.log(0 == null);

