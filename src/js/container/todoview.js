/**
 * Created by Kimi on 2017/3/28.
 */
import React from 'react';
import { ActionCreators } from 'redux-undo'
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import { TodoView } from '../component';


class TodoViewContainer extends React.Component {
  render() {
    const { currentState, handleClick, canUndo, canRedo, undo, redo } = this.props;
    const unredos = { canUndo: canUndo, canRedo: canRedo, undo: undo, redo: redo };
    return (
      <TodoView currentState={currentState} handleClick={handleClick} unredos={unredos} />
    )
  }
}

function mapStateToPorps(state) {
  return {
    currentState: state.visibilityFilter,
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (filter) => {
      dispatch(setVisibilityFilter(filter))
    },
    undo: () => dispatch(ActionCreators.undo()),
    redo: () => dispatch(ActionCreators.redo())
  };
}

export default connect(mapStateToPorps, mapDispatchToProps)(TodoViewContainer);


