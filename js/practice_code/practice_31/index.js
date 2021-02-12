// console.log('start');

// console.log('start 2');

// function timeout2sec() {
//    console.log('timeout2sec');
   
// }

// setTimeout(()=> { 
//    console.log('Inside timeout, after 2000 second');
// }, 5000);

// setTimeout(timeout2sec, 2000);


// console.log('End');


const promise1 = new Promise((resolve, reject) => setTimeout(() => console.log('Promise 1'), 3000));

const promise2 = new Promise((resolve, reject) => setTimeout(() => console.log('Promise 2'), 2000));

Promise.all([promise1, promise2]);