function display(data, callback) {
   
   let randInt = Math.random() * (10 - 1) + 1;
   let err = randInt > 5 ? new Error('Runtime error. Number greater then 5') : null;

   setTimeout(() => { 
      callback(err, data);
   }, 0);
}

console.log('Program start working');

display('Some data', (err, data) => { 
   if(err) throw err;
   console.log(data);
   
});

console.log('Program finished work');
