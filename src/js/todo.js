/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import data from './tododata';
import TodoContent from './todocontent';
import DeleteTodo from './deletetodo'

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
            data: data,
        });
    }


    render() {
        let lists = [];
        let handle = this.handleDelete;
        this.state.data.forEach(function (v, i) {
            console.log(v, i);
            lists.push(
                <div key={i} className="" style={{fontSize: '24px'}}>
                    <TodoContent id={i} content={v.content}/>
                    <DeleteTodo id={i} onDelete={handle}/>
                </div>)
        });
        return (
            <div className="container">
                {lists}
            </div>
        )
    }


}
export default Todo;