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

const myPromise = new Promise((resolse, reject) => { 

   let random = Math.floor(Math.random() * 2);
   let count = 0;
   console.log('Random', random);
   

   if (random === 0) {
      count++;
      resolse(count);
   } else {
      count--;
      reject(count);
   }
   console.log('Inside count', count);
   
});

myPromise
   .then(count => console.log('Succes', count))
   .catch(count => console.log('Reject', count));