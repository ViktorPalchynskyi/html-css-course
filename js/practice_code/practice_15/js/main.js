function XO(str) {
   let x = 0;
   let o = 0;
   str.toLowerCase().split('').forEach((ox) =>{      
       if(ox === 'x'){
         x++;
       } else if(ox === 'o'){
         o++;
       }
     });
   if(x === o){
     return true;
   } else if(x > o || o > x){ 
     return false;
   } else if(x === 0 && o === 0){ 
     return false;
   }
}


 function XO(str) {
   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}