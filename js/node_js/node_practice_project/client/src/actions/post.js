import axios from 'axios';
import {setAlert} from './aler';
import {constants as C} from '../actions/type';

// Get posts
export const getPosts = () => async dispatch => {
   try {
      const res = await axios.get('/api/posts');

      dispatch({
         type: C.GET_POSTS,
         payload: res.data
      });

   } catch (err) {

      dispatch({
         type: C.POST_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
   }
};