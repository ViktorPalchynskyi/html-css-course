// Контекс определяет где/как функция была вызвана

// const person = { 
//    surname: 'Snow',
//    knows: function (what, name) {
//       console.log(`You know ${what}, ${name} ${this.surname}`);
      
//    }
// };

// const bran = {surname: 'Stark'};

// person.knows('nothing', 'John');

// person.knows.call(bran, 'all', 'Bran');
// person.knows.apply(bran, ['all', 'Bran']);
// const bound =  person.knows.bind(bran, 'all', 'Bran');
// bound();

function Person(name, age) {
   this.name = name;
   this.age = age;

   console.log(this);
}

const elena = new Person('Elena', 23);

// 

// function logThis() {
//    console.log(this);
// }

// const obj = {num: 42};
// logThis.call(obj);
// logThis.bind(obj)();

// const animal = { 
//    legs: 4,
//    logThis: function () { 
//       console.log(this);
      
//     }
// };

// animal.logThis();

function Cat(color) { 
   this.color = color;
   console.log(`This ${this}`);
   
   (() => console.log(`Arrow this ${this}`)
   )();
 }

new Cat('red');

