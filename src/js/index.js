/**
 * Created by Kimi on 2017/3/20.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import Todo from './container/todo'
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Todo/>
    </Provider>
    , document.getElementById('todo')
);