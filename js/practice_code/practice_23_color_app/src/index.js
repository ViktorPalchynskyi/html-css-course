import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import {colors, sort} from './redux/reducers/reducers';
import {addColor, removeColor, sortColors, rateColor} from './redux/actions/actionsCreators';


const store = createStore(
  combineReducers({colors, sort}),
  (localStorage['redux-store']) ? 
    JSON.parse(localStorage['redux-store']) :
    {} 
);

store.subscribe(() => { 
  localStorage['redux-store'] = JSON.stringify(store.getState());
});

store.dispatch(rateColor("aa225a6d-96f9-4ea5-9ceb-f448447393c0", 5))

console.log('current color count', store.getState().colors.length)
console.log('current state', store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
