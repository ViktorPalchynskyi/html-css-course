function findOutlier(integers){
  let evenNum = 0;
  let oddNum = 0;
  for (let num of integers) { num % 2 === 0 ?  evenNum++ : oddNum++}
  return +(integers.filter(num=> (evenNum < oddNum ? num % 2 === 0: num % 2 !== 0)));
}



const arr = [ 5,0,5,5,7,7];

console.log(arr.reduce((a, b)=> a + b,0));
console.log(findOutlier(arr));