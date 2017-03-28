/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';

class TodoContent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = e => {
        this.props.toggle(this.props.data);
    }

    render() {
        return (
            <span>
                 <input type="checkbox" className="awesome" id={'checkbox' + this.props.id} onChange={this.handleClick}
                        checked={this.props.data.completed}/>
                <label className="col-sm-4"
                       htmlFor={'checkbox' + this.props.id}>{this.props.data.content}</label>
            </span>
        )
    }
}

export default TodoContent;