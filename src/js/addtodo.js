/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = e => {
        e.preventDefault();
        let input = e.target.querySelector('input');
        if (!input.value) {
            input.focus();
            return;
        }
        this.props.addTodo(input.value);
        input.value = '';
        input.focus();

    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <div className="input-group col-sm-5">
                    <input type="text" className="form-control" required placeholder="add new todo"/>
                    <span className="input-group-btn">
                       <button className="btn btn-default" type="submit">Add</button>
                    </span>
                </div>
            </form>
        )
    }
}
export default AddTodo;