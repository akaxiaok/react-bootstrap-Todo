/**
 * Created by Kimi on 2017/4/3.
 */
import {createStore}  from 'redux';
import {todoApp}  from './reducer';
let store = createStore(todoApp);
export default store;