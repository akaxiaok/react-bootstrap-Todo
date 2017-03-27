/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import data from './tododata';
import TodoContent from './todocontent';
import DeleteTodo from './deletetodo'
import AddTodo from './addtodo';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
        }
    }

    handleDelete = i => {
        this.state.data.splice(i, 1);
        this.setState({
            data: data
        });
    }
    handleAddTodo = v => {
        data.push({completed: false, content: v})
        this.setState({
            data: data
        })
    }
    toggleContent = (i) => {
        data[i].completed = !data[i].completed;
        console.log(data);
        this.setState({
            data: data
        })
    }

    render() {
        let lists = [];
        this.state.data.forEach((v, i) => {
            if (!v.completed) {
                lists.push(
                    <div key={i} className="row" style={{fontSize: '24px'}}>
                        <TodoContent id={i} content={v.content} toggle={this.toggleContent}/>
                        <DeleteTodo id={i} onDelete={this.handleDelete}/>
                    </div>)
            }
        });
        return (
            <div className="container">
                <div className="page-header">
                    <h1>TodoList:</h1>
                </div>
                <AddTodo addTodo={this.handleAddTodo}/>
                {lists}
            </div>
        )
    }


}
export default Todo;