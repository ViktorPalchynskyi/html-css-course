import uuid from 'uuid';
import {constants as C} from './type';

export const setAlert = (msg, alertType) => dispatch => { 
   const id = uuid.v4();
   dispatch({
      type: C.SET_ALERT,
      payload: {msg, alertType, id}
   });
};