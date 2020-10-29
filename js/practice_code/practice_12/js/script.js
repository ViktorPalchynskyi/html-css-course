function spinWords(string){
  let strArr = string.split(' ');
  let res = [];
  for(let item of strArr){ 
    if(item.length >= 5){
      let newSubStr = item.split("").reverse().join("");
      res.push(newSubStr);
    } else { 
      res.push(item);
    }
  }
  return res.join(' ');
}

function spinWords(string){
  return string.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
}


