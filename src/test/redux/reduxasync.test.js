/**
 * Created by Kimi on 2017/4/10.
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import fetch from 'isomorphic-fetch';
const FETCH_THING = 'FETCH_THING';
import promiseMiddleware from 'redux-promise-middleware';
import rq from 'request-promise-native';
let reducer = function (state = {}, action) {
    switch (action.type) {
        case FETCH_THING:
            return {
                body: action.result
            };
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

let getThunkAction = (language) => {
    return (dispatch) => {
        return fetch(`https://api.github.com/search/repositories?q=${language}&sort=stars`).then(r => r.json()).then(json => {
            dispatch({
                type: FETCH_THING,
                result: json
            })
        })
    }
};
store.getState();

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(getThunkAction('java'));

// unsubscribe(); // 不能调用，否则不显示


const getList = language => ({
    type: 'GET',
    payload: new Promise(resolve => {
        setTimeout(() => {
            fetch(`https://api.github.com/search/repositories?q=${language}&sort=stars`).then(response => {
                resolve(response.json());
            })
        }, 1000)

    })
});

const reducer2 = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PENDING':
            return {
                isPending: true
            };
        case 'GET_FULFILLED':
            return {
                body: action.payload
            };
        default:
            return state;
    }
};
const store2 = createStore(reducer2, {}, applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()
));

store2.getState();

store2.subscribe(() => {
    console.log(store2.getState());
});
store2.dispatch(getList('java'));


const getList3 = language => {
    const options = {
        uri: `https://api.github.com/search/repositories?q=${language}&sort=stars`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
    return {
        type: 'GET',
        payload: rq(options)
    }
};


const reducer3 = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PENDING':
            return {
                isPending: true
            };
        case 'GET_FULFILLED':
            return {
                body: action.payload
            };
        default:
            return state;
    }
};
const store3 = createStore(reducer3, {}, applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()
));

store3.getState();

store3.subscribe(() => {
    console.log(store3.getState());
});
store3.dispatch(getList3('java'));