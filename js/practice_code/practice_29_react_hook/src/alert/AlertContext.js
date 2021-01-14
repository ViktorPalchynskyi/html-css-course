import React,{useContext, useReducer} from 'react';

const AlertContext = React.createContext();

export const useAlert = () => { 
   return useContext(AlertContext);
};

const C = {
   SHOW_ALERT: 'SHOW',
   HIDE_ALERT: 'HIDE'
};

const reducer = (state, action) => { 
   switch (action.type) {
      case C.SHOW_ALERT:
         return { 
            ...state, 
            visible: true,
            text: action.text
         };
   
      case C.HIDE_ALERT:
         return { 
            ...state, 
            visible: false
         };
      default:
         return state;
   }
}

export const AlertProvider = ({children}) => { 

   const [state, dipatch] = useReducer(reducer,{
      visible: false,
      text: ''
   });  

   const show = text => dipatch({type:C.SHOW_ALERT, text});
   const hide = () => dipatch({type:C.HIDE_ALERT});

   return(
      <AlertContext.Provider value={{
         visible: state.visible,
         text: state.text,
         show, hide
      }}>
            {children}
      </AlertContext.Provider>
   )
}