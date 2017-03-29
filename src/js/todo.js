/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import data from './tododata';
import TodoContent from './todocontent';
import DeleteTodo from './deletetodo'
import AddTodo from './addtodo';
import {TodoView, VIEW_STATE} from './todoview'
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            currentState: VIEW_STATE.all
        }
    }

    handleDelete = i => {
        this.state.data.splice(i, 1);
        this.setState({
            data: data
        });
    }
    handleAddTodo = v => {
        data.push({completed: false, content: v});
        if (this.state.currentState === VIEW_STATE.completed) {
            this.setState({currentState: VIEW_STATE.active}, () => {
                this.switchView(this.state.currentState);
            });
        } else {
            this.switchView(this.state.currentState);
        }

    }
    switchView = s => {
        switch (s) {
            case VIEW_STATE.all:
                this.setState({
                    data: data,
                    currentState: VIEW_STATE.all
                });
                break;
            case VIEW_STATE.active:
                this.setState({
                    data: data.filter(x => x.completed === false),
                    currentState: VIEW_STATE.active
                });
                break;
            case VIEW_STATE.completed:
                this.setState({
                    data: data.filter(x => x.completed !== false),
                    currentState: VIEW_STATE.completed
                });
                break;
            default:
                this.setState({data: data});
                break;
        }
    }
    toggleContent = (i) => {
        data[data.indexOf(i)].completed = !i.completed;
        this.switchView(this.state.currentState);
    }

    render() {
        let lists = [];
        this.state.data.forEach((v, i) => {
            lists.push(
                <div key={i} className="row" style={{fontSize: '24px'}}>
                    <TodoContent id={i} data={v} toggle={this.toggleContent}/>
                    <DeleteTodo id={i} onDelete={this.handleDelete}/>
                </div>)
        });
        return (
            <div className="container">
                <div className="page-header">
                    <h1>TodoList:</h1>
                </div>
                <TodoView onSwitch={this.switchView} currentState={this.state.currentState}/>
                <AddTodo addTodo={this.handleAddTodo}/>
                <div className="content-list">
                    {lists}
                </div>
            </div>
        )
    }


}
export default Todo;