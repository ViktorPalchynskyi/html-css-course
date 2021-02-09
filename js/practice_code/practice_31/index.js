console.log('start');

console.log('start 2');

function timeout2sec() {
   console.log('timeout2sec');
   
}

setTimeout(()=> { 
   console.log('Inside timeout, after 2000 second');
}, 5000);

setTimeout(timeout2sec, 2000);


console.log('End');
