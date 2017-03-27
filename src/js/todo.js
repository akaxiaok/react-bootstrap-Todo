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

    render() {
        let lists = [];
        let handle = this.handleDelete;
        this.state.data.forEach(function (v, i) {
            if (!v.complete) {
                lists.push(
                    <div key={i} className="row" style={{fontSize: '24px'}}>
                        <TodoContent id={i} content={v.content}/>
                        <DeleteTodo id={i} onDelete={handle}/>
                    </div>)
            }
        });
        return (
            <div className="container">
                <AddTodo addTodo={this.handleAddTodo}/>
                {lists}
            </div>
        )
    }


}
export default Todo;