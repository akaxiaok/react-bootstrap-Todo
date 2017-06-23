/**
 * Created by Kimi on 2017/3/29.
 */
import React from 'react';
import {startEdit} from './actions';
import {connect} from 'react-redux';
class EditTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <a type="button" className="" style={{ marginLeft: '.1em', verticalAlign: '-.1em' }}
             onClick={this.props.handleClick.bind(this, this.props.id)}>
                <span className="glyphicon glyphicon-edit" aria-hidden="true"/>
            </a>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (id) => {
            dispatch(startEdit(id));
        }
    };
}


EditTodo = connect(null, mapDispatchToProps)(EditTodo);
export default EditTodo;