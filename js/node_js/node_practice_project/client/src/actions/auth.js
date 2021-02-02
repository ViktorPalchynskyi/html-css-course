import axios from 'axios';
import {setAlert} from './aler';
import {constants as C} from './type';

// Register User

export const register = ({name,email, password}) => async dispatch => {
   const config = { 
      headers: { 
         'Content-Type': 'application/json'
      }
   };

   const body = JSON.stringify({ name,email,password});

   try {
      const res = await axios.post('api/users',body,config);

      dispatch({
         type: C.REGISTER_SUCCESS,
         payload: res.data
      });
   } catch (err) {
      const errors = err.response.data.errors;

      if(errors) { 
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }

     dispatch({
        type: C.REGISTER_FAIL
     }); 
   }
};