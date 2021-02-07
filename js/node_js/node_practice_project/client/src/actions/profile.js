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

      dispatch({type: C.CLEAR_PROFILE});

      dispatch({
         type: C.PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
   }
};

// Get all profiles
export const getProfiles = () => async dispatch => { 
   dispatch({type: C.CLEAR_PROFILE});

   try {
      const res = await axios.get('/api/profile');

      dispatch({
         type: C.GET_PROFILES,
         payload: res.data
      });
   } catch (err) {
      dispatch({
         type: C.PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
   }
};

// Get profile by id
export const getProfileById = userId => async dispatch => { 

   try {
      const res = await axios.get(`/api/profile/user/${userId}`);

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

// Get Github repos
export const getGithubRepos = username => async dispatch => { 

   try {
      const res = await axios.get(`/api/profile/github/${username}`);

      dispatch({
         type: C.GET_REPOS,
         payload: res.data
      });
   } catch (err) {
      dispatch({
         type: C.PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
   }
};

// Create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => { 
   try {
      const config = { 
         headers: { 
            'Content-type' : 'application/json'
         }
      };

      const res = await axios.post('api/profile', formData, config);

      dispatch({
         type: C.GET_PROFILE,
         payload: res.data
      });

      dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created','success'));

      if(!edit) { 
         history.push('/dashboard');
      }
   } catch (err) {
      const errors = err.response.data.errors;

      if(errors) { 
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
         type: C.PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
      
   }
};

// Add Experience 
export const addExperience = (formData, history) => async dispatch => {
   try {
      const config = { 
         headers: { 
            'Content-type' : 'application/json'
         }
      };

      const res = await axios.put('api/profile/experience', formData, config);

      dispatch({
         type: C.UPDATE_PROFILE,
         payload: res.data
      });

      dispatch(setAlert('Experience Added','success'));

      history.push('/dashboard');
   } catch (err) {
      const errors = err.response.data.errors;

      if(errors) { 
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
         type: C.PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
      
   }
};

// Add Education 
export const addEducation = (formData, history) => async dispatch => {
   try {
      const config = { 
         headers: { 
            'Content-type' : 'application/json'
         }
      };

      const res = await axios.put('api/profile/education', formData, config);

      dispatch({
         type: C.UPDATE_PROFILE,
         payload: res.data
      });

      dispatch(setAlert('Education Added','success'));

      history.push('/dashboard');
   } catch (err) {
      const errors = err.response.data.errors;

      if(errors) { 
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
         type: C.PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
      
   }
};

// Delete experience 
export const deleteExperience = id => async dispatch => {
   try {
      const res = await axios.delete(`/api/profile/experience/${id}`);

      dispatch({
         type: C.UPDATE_PROFILE,
         payload: res.data
      });

      dispatch(setAlert('Experience Removed','success'));

   } catch (err) {
      dispatch({
         type: C.PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
   }
};

// Delete education 
export const deleteEducation = id => async dispatch => {
   try {
      const res = await axios.delete(`/api/profile/education/${id}`);

      dispatch({
         type: C.UPDATE_PROFILE,
         payload: res.data
      });

      dispatch(setAlert('Education Removed','success'));

   } catch (err) {
      dispatch({
         type: C.PROFILE_ERROR,
         payload: { msg: err.response.statusText, status: err.status }
      });
   }
};

// Delete account & profile 
export const deleteAccount = () => async dispatch => {
   if(window.confirm('Are you sure? This can NOT be undone!')) {
      try {
         await axios.delete('api/profile');
   
         dispatch({type: C.CLEAR_PROFILE});
         dispatch({type: C.ACCOUNT_DELETED});
   
         dispatch(setAlert('Your account has been deleted'));
   
      } catch (err) {
         dispatch({
            type: C.PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.status }
         });
      }
   }
};