/**
 * Created by Kimi on 2017/3/28.
 */
import React from 'react';
import {ActionCreators} from 'redux-undo'
import {connect} from 'react-redux';
import {Unredo} from '../component';


const container = (props) => {
    return (
        <Unredo {...props}/>
    )
}

function mapStateToPorps(state) {
    return {
        canUndo: state.todos.past.length > 0,
        canRedo: state.todos.future.length > 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        undo: () => dispatch(ActionCreators.undo()),
        redo: () => dispatch(ActionCreators.redo())
    };
}

export default connect(mapStateToPorps, mapDispatchToProps)(container);


