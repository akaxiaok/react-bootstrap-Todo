/**
 * Created by Kimi on 2017/4/19.
 */
import React from 'react'
import {ActionCreators} from 'redux-undo'
import {connect} from 'react-redux'
class Unredo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="btn-group view-buttons" style={{marginLeft: "10px"}}>
                <button className="btn btn-default" onClick={this.props.undo} disabled={!this.props.canUndo}>
                    Undo
                </button>
                <button className="btn btn-default" onClick={this.props.redo} disabled={!this.props.canRedo}>
                    Redo
                </button>
            </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        canUndo: state.todos.past.length > 0,
        canRedo: state.todos.future.length > 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        undo: () => dispatch(ActionCreators.undo()),
        redo: () => dispatch(ActionCreators.redo())
    }
}
let unredo = connect(mapStateToProps, mapDispatchToProps)(Unredo);
export default unredo;