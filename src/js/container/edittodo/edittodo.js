/**
 * Created by Kimi on 2017/3/29.
 */
import React from 'react';
import {startEdit} from '../../actions';
import {connect} from 'react-redux';
import {ModifyTodo} from '../../component';

export const container = (props) => {
    return (
        <ModifyTodo {...props} action="edit"/>
    )

}

export function mapDispatchToProps(dispatch) {
    return {
        handleClick: (id) => {
            dispatch(startEdit(id));
        }
    };
}

export default connect(null, mapDispatchToProps)(container);
