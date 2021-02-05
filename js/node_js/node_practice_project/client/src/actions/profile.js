import axios from 'axios';
import {setAlert} from './aler';
import {constants as C} from './type';

// Get current users profile
export const getCurrentProfile = () => async dispatch => { 
   try {
      const res = await axios.get('/api/profile/me');

      dispatch({
         type: C.GET_PROFILE,
         payload: res.data
      });
   } catch (err) {
      dispatch({
         type: C.PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
   }
};