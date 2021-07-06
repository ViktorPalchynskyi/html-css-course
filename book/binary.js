const binarySearch = (list, item) => { 
   let low = 0;
   let higt = list.length - 1;

   while (low <= higt) {
      let mid = Math.floor((low + higt)/2);
      let guess = list[mid];
      if (guess === item) {
         return mid;
      }
      if (guess > item) {
         higt = mid - 1;
      } else {
         low = mid + 1;
      }
   }
   return null;
};

const myList = [1,3,5,7,9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));
