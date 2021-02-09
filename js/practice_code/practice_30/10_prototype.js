// __proto__

// function  Cat(name, color) {
//    this.name = name;
//    this.color = color;  
// }

// Cat.prototype.voice = function () {
//    console.log(`Cat ${this.name} says mew`);
// };

// const cat = new Cat('Kit','Yellow');
// console.log(Cat.prototype);
// console.log(cat.__proto__ === Cat.prototype);
// console.log(cat.constructor);

// cat.voice();

function Person() {
   
}

// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';

// const person = new Person();
// person.name = 'Viktor';

// console.log(person);
// console.log(person.skin);
// console.log(person.legs);

// console.log(person.hasOwnProperty('legs'));

const proto = {year: 2019};
const myYear = Object.create(proto);

console.log(myYear.year);

proto.year = 2200;

console.log(myYear.year);

