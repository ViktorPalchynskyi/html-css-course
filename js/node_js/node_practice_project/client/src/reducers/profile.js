import {constants as C} from '../actions/type';

const initialState = { 
   profile: null,
   profiles: [],
   repos: [],
   loading: true,
   error: {}
};

export default function (state = initialState, action) { 
   const {type, payload} = action;

   switch (type) {
      case C.GET_PROFILE:
      case C.UPDATE_PROFILE:
      return{
         ...state, 
         profile: payload,
         loading: false
      };
      case C.GET_PROFILES:
         return{ 
            ...state,
            profiles: payload,
            loading: false
         };
      case C.PROFILE_ERROR:
         return{
            ...state, 
            error: payload,
            loading: false
         };
      case C.CLEAR_PROFILE:
         return{
            ...state, 
            profile: null,
            repos: [],
            loading: false
         };
      case C.GET_REPOS: 
         return{ 
            ...state, 
            repos: payload,
            loading: false
         };
      default:
         return state;
   }
}