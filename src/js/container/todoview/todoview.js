/**
 * Created by Kimi on 2017/3/28.
 */
import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../../actions';
import {TodoView} from '../../component';

export const mapStateToProps = (state) => {
    return {
        currentState: state.visibilityFilter,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (filter) => {
            dispatch(setVisibilityFilter(filter))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoView);


