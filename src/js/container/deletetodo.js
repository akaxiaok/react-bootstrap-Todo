/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions';
import {DeleteTodo} from '../component';

const container = (props) => {
    return (
        <DeleteTodo {...props}/>
    )

}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (id) => {
            dispatch(deleteTodo(id))
        }
    };
}

export default connect(null, mapDispatchToProps)(container);
