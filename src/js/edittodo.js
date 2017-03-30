/**
 * Created by Kimi on 2017/3/29.
 */
import React from 'react';

class EditTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a type="button" className="" href="#" style={{marginLeft: '.1em', verticalAlign: '-.1em'}}
               onClick={this.handleClick}>
                <span className="glyphicon glyphicon-edit" aria-hidden="true"/>
            </a>
        );
    }

    handleClick = () => {
        this.props.startEdit(this.props.data);
    }
}
export default EditTodo;