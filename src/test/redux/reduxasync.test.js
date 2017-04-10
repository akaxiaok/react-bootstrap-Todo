/**
 * Created by Kimi on 2017/4/10.
 */
import promiseMiddleware from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rq from 'request-promise-native';
const FETCH_THING = 'FETCH_THING';
let rootReducer = function (state = {}, action) {
    switch (action) {
        case FETCH_THING:
            return action.result;
        default:
            return state;
    }
};

const store = createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware)
);


let getAction = async (language) => {
    let options = {
        uri: `https://api.github.com`,
        headers: {
            'User-Agent': 'Request-Promise'
        }
    };
    const result = await rq(options);
    console.log(result);
    return {
        type: FETCH_THING,
        result: result
    };
};


let unsubscribe = store.subscribe(() => {
});
store.dispatch(getAction('javascript'));
console.log(store.getState());
store.dispatch(getAction('java'));
console.log(store.getState());

