const numbers = [1,2,3,4,5];

const newNumbers = [];

function createAddNumber(number) {
   return function(arr) {
      return arr.map(num => num += number); 
   };
}

const num = createAddNumber(1);

const addFive = createAddNumber(5);

console.log(num(numbers));
console.log(addFive(numbers));
