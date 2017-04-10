/**
 * Created by Kimi on 2017/4/10.
 */
import promiseMiddleware from 'redux-promise';
import {createStore, applyMiddleware, dispatch} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rq from 'request-promise-native';
import fetch from 'isomorphic-fetch';
const FETCH_THING = 'FETCH_THING';
let rootReducer = function (state = {}, action) {
    switch (action.type) {
        case FETCH_THING:
            return action.result;
        default:
            return state;
    }
};

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);


let getThunkAction = (language) => {
    return (dispatch) => {
        return fetch(`https://api.github.com`).then(response => response.json()).then(
            json => {
                console.log(json);
                dispatch({
                    type: FETCH_THING,
                    result: json
                })
            }
        )
    }
};
store.getState();

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(getThunkAction('java'));


unsubscribe();

