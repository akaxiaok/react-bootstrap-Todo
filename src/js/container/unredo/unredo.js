/**
 * Created by Kimi on 2017/3/28.
 */
import React from 'react';
import {ActionCreators} from 'redux-undo'
import {connect} from 'react-redux';
import {Unredo} from '../../component';

export const mapStateToProps = (state) => {
    return {
        canUndo: state.todos.past.length > 0,
        canRedo: state.todos.future.length > 0
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        undo: () => dispatch(ActionCreators.undo()),
        redo: () => dispatch(ActionCreators.redo())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Unredo);


