/**
 * Created by Kimi on 2017/3/28.
 */
import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import { TodoView } from '../component';

class TodoViewContainer extends React.Component {
  render() {
    const { currentState, handleClick } = this.props;
    return (
      <TodoView currentState={currentState} handleClick={handleClick} />
    )
  }
}

function mapStateToPorps(state) {
  return {
    currentState: state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  };
}

export default connect(mapStateToPorps, mapDispatchToProps)(TodoViewContainer);

