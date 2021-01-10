import {ADD,SUB,ADD_NUMBER,ADD2,ADD_TEN} from './actinoTypes';

export function add () { 
   return { 
      type: ADD
   };
}

export function sub () { 
   return { 
      type: SUB
   };
}

export function addNumber (number) { 
   return { 
      type: ADD_NUMBER,
      payload: number
   };
}

export function add2 (number) { 
   return { 
      type: ADD2,
      payload: number
   };
}

export function addTen () { 
   return { 
      type: ADD_TEN
   };
}

export function  asyncAdd(number) { 
   return (dispatch) => {
      setTimeout(() => { 
         dispatch(addNumber(number));
      }, 3 * 1000);
   };
}