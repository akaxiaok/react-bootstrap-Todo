/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import {connect} from 'react-redux';
import {AddTodo} from '../component';
import {addTodo} from "../actions"

const Container = (props) => {
    return (
        <AddTodo visibilityFilter={props.visibilityFilter} addTodo={props.addTodo}/>
    )
}
const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    }
};

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (value) => dispatch(addTodo(value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);