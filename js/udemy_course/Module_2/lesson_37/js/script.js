"use strict";


function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function () {
      console.log(`Hello, my name is ${this.name} and i'm ${this.id} years old.`);
   };
}

User.prototype.exit = function () {
   console.log(`User ${this.name} has abendoned the site`);
};



const viktor = new User('Viktor', 22);
const ivan = new User('Ivan', 28);
viktor.hello();
ivan.hello();
ivan.exit();
viktor.exit();

console.log(viktor);
console.log(ivan);