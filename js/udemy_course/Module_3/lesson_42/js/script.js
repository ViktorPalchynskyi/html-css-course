"use strict";

const person = {
   name: 'Alex',
   tel: '+744442442',
   parents: {
      mom: 'Olga',
      dad: 'Mike'
   }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Lili';
console.log(person);
console.log(clone);