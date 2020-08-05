"use strict";

if (4 == 9) {
   console.log('Ok!');
} else {
   console.log('error')
}



// if (num < 49) {
//    console.log('Error');
// } else if (num > 100) {
//    console.log('Много');
// } else {
//    console.log('ok');
// }

// (num === 50) ? console.log('ok'): console.log('Error');

const num = 520;

switch (num) {
   case 49:
      console.log('Wrong');
      break;
   case 100:
      console.log('Wrong');
      break;
   case 50:
      console.log('Correct');
      break;
   default:
      console.log('Not this time');
      break;
}