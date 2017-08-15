/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../../actions';
class DeleteTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <a type="button" className="" style={{ marginLeft: '.1em', verticalAlign: '-.1em' }}
             onClick={this.props.handleClick.bind(this, this.props.id)}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"/>
            </a>
        );
    }

}
function mapDispatchToProps(dispatch) {
    return {
        handleClick: (id) => {
            dispatch(deleteTodo(id))
        }
    };
}

DeleteTodo = connect(null, mapDispatchToProps)(DeleteTodo)

export default DeleteTodo;