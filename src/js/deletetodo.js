/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';

class DeleteTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a type="button" className="" href="#" style={{marginLeft: '.1em', verticalAlign: '-.1em'}}
               onClick={this.handleClick}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"/>
            </a>
        );
    }

    handleClick = () => {
        this.props.onDelete(this.props.id);
    }
}
export default DeleteTodo;