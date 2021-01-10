import {ADD,SUB,ADD_NUMBER,ADD_TEN} from '../actions/actinoTypes';

const initialState = {
   counter: 0
 }
 
 export default function counter1(state = initialState, action) {
   
   switch(action.type){ 
     case ADD:
       return{
         counter: state.counter + 1
       }
     case SUB: 
       return {
         counter: state.counter - 1
       }
     case ADD_TEN: 
       return {
         counter: state.counter + 10
       }
     case ADD_NUMBER: 
       return {
         counter: state.counter + action.payload
       }
     default: 
      return state
   }
 }