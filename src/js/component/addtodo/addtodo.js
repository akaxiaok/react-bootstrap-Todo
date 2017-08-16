/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import {VisibilityFilters} from '../../actions';

class AddTodo extends React.Component {
    handleClick = e => {
        e.preventDefault();
        if (this.props.visibilityFilter === VisibilityFilters.SHOW_COMPLETED) {
            this.props.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE);
        }
        this.props.addTodo(this.state.value);
        this.setState({value: ''});
    }
    handleChange = e => {
        this.setState({value: e.target.value})
    }

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <div className="input-group col-sm-5">
                    <input type="text" className="form-control" onChange={this.handleChange} required
                           placeholder="add new todo" value={this.state.value}/>
                    <span className="input-group-btn">
                       <button className="btn btn-default" type="submit">Add</button>
                    </span>
                </div>
            </form>
        )
    }
}

export default AddTodo;