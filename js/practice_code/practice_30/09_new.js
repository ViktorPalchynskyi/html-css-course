function Cat(color, name){
   this.color = color;
   this.name = name;
}

// const cat = new Cat('black', 'kit');

// console.log(cat);

// function myNew(constructor, ...args){ 
//    const obj = {};
//    Object.setPrototypeOf(obj, constructor.prototype);
//    return constructor.apply(obj, args) || obj;
// }

// const newCat = myNew(Cat, 'black', 'kit');

// console.log(newCat);

const cat = new Cat('white', 'Kitty');
console.log(cat);
