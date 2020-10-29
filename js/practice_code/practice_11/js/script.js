function solution(number){
  let sum = 0;
  for(let i = 0; number > i;){
    --number; 
    if(number % 3===0 || number % 5===0) {
      sum +=  number;
    } else if (number < 0) { 
      return 0;
    }
  }
  return sum;
}

console.log(solution(10));


function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

  