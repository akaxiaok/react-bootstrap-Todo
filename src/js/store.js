/**
 * Created by Kimi on 2017/4/3.
 */
import {createStore}  from 'redux';
import todoApp  from './reducer';
let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;