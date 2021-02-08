import {constants as C} from '../actions/type';

const initialState = { 
   posts: [],
   post: null,
   loading: true,
   error: {}
};

export default function(state=initialState, action) {
   const {type , payload} = action;

   switch (type) {
      case C.GET_POSTS:
         return{
            ...state,
            posts: payload,
            loading: false
         };

      case C.POST_ERROR:
         return{
            ...state,
            error: payload,
            loading: false
         };

      case C.UPDATE_LIKES:
         return {
            ...state,
            posts: state.posts.map(post =>
              post._id === payload.id ? { ...post, likes: payload.likes } : post
            ),
            loading: false
         };

      default:
         return{ 
            ...state
         };
   }
}