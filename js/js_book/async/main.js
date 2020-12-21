function countdouwn (seconds) { 
   return new Promise((resole, reject) => { 
      for(let i=seconds; i>=0; i--) { 
         setTimeout(() => {
            if(i>0){ 
               console.log(i + '...');
            } else {
               resole(console.log('Start!'));
            }
         });
      }
   }, (seconds-1) * 1000);
}

countdouwn(10).then(
   ()=> console.log('Over'), 
   (err) => console.log('Not over', err)
);