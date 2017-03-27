/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';

class TodoContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span >
            <input type="checkbox" className="awesome" id={'checkbox' + this.props.id}/>
            <label className="col-sm-4" htmlFor={'checkbox' + this.props.id}>{this.props.content}</label>
            </span>
        )
    }
}

export default TodoContent;