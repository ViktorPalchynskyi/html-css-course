const findSmallers = (arr) => {
   console.log('Arr', arr);
   let smallest = arr[0];
   let smallestIndex = 0;
   for (let i of arr) {
      if (arr[i] < smallest) {
         smallest = arr[i];
         smallestIndex = i;
      }
   }
   console.log('Index', smallestIndex);
   return smallestIndex;
};

const selectionSort = (arr) => {
   const newArr = [];
   for (let i of arr) {
      console.log('IIII', i);
      const smallest = findSmallers(arr);
      console.log('Arr222222', arr);
      newArr.push(...arr.splice(smallest, 1));
   }
   return newArr;
}


console.log(selectionSort([5,3,6,2,10]));
