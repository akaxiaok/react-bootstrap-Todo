/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo, endEdit} from '../actions';
import {TodoContent} from '../component';

const container = (props) => {
    return (
        <TodoContent {...props}/>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (id) => {
            dispatch(toggleTodo(id))
        },
        handleBlur: (id, e) => {
            dispatch(endEdit(id, e.target.value));
        }
    };
}

export default connect(null, mapDispatchToProps)(container);

