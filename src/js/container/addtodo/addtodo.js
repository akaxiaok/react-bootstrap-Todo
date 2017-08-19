/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import {connect} from 'react-redux';
import {AddTodo} from '../../component/index';
import {addTodo, setVisibilityFilter} from "../../actions"

export const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    }
};

export function mapDispatchToProps(dispatch) {
    return {
        addTodo: (value) => dispatch(addTodo(value)),
        setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);