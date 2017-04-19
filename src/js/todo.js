/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import TodoContent from './todocontent';
import DeleteTodo from './deletetodo'
import AddTodo from './addtodo';
import TodoView from './todoview'
import EditTodo from './edittodo';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let lists = [];
        this.props.todos.forEach((v) => {
            lists.push(
                <div key={v.id} className="row" style={{fontSize: '24px'}}>
                    <TodoContent id={v.id} todo={v}/>
                    <EditTodo id={v.id}/>
                    <DeleteTodo id={v.id}/>
                </div>)
        });
        return (
            <div className="container">
                <div className="page-header">
                    <h1>TodoList:</h1>
                </div>
                <TodoView currentState={this.props.currentState}/>
                <AddTodo />
                <div className="content-list">
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {lists}
                    </ReactCSSTransitionGroup>
                </div>

            </div>
        )
    }
}
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
});

Todo = connect(
    mapStateToProps
)(Todo);
export default Todo;