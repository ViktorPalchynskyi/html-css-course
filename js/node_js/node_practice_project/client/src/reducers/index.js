import {combineReducers} from 'redux';
import alert from './aler';
import auth from './auth';
import profile from './profile';

export default combineReducers ({
   alert, 
   auth,
   profile
});