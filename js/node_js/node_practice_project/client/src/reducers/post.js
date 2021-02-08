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

      case C.GET_POST:
         return{
            ...state,
            post: payload,
            loading: false
         };
         
      case C.ADD_POST:
         return {
            ...state,
            posts: [payload, ...state.posts],
            loading: false
         };

      case C.DELETE_POST: 
         return{
            ...state,
            posts: state.posts.filter(post => post._id !== payload),
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

      case C.ADD_COMMENT:
         return {
            ...state,
            post: {...state.post, comments: payload},
            loading: false
         };

      case C.REMOVE_COMMENT:
         return {
            ...state,
            post: {
               ...state.post, 
               comments: state.post.comments.filter(comment => comment._id === payload)},
            loading: false
         };

      default:
         return{ 
            ...state
         };
   }
}