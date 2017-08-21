/**
 * Created by Kimi on 2017/4/3.
 */
import {createStore} from 'redux';
import todoApp from '../reducer';

let window = window ? window : null;
let store = null;
if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__());
}
else {
    store = createStore(todoApp);
}
export default store;