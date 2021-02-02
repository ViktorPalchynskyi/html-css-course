import { v4 as uuidv4 } from 'uuid';
import {constants as C} from './type';

export const setAlert = (msg, alertType, timeout = 5) => dispatch => { 
   const id = uuidv4();
   dispatch({
      type: C.SET_ALERT,
      payload: {msg, alertType, id}
   });

   setTimeout(() => dispatch({ type: C.REMOVE_ALERT, payload :id}), timeout*1000);
};