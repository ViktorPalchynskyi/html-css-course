import {constants as C} from '../actions/type';

const initialState = [];

export default function( state= initialState , action) { 

   const {type, payload} = action;

   switch (type) {
      case C.SET_ALERT:
         return [...state, payload];
      case C.REMOVE_ALERT:
         return state.filter(alert => alert.id !== payload);
      default:
         return state;
   }
}