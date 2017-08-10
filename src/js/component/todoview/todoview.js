import React from 'react';
import Unredo from '../unredo'
import { VisibilityFilters } from '../../actions';

class TodoView extends React.Component {
  getStyle = (x) => {
    if (x === this.props.currentState) {
      return "btn btn-primary";
    }
    else {
      return "btn btn-default";
    }
  }

  render() {
    return (
      <div >
        <div className="btn-group view-buttons" role="group" aria-label="..." >
          <button type="button" className={this.getStyle(VisibilityFilters.SHOW_ALL)}
                  onClick={this.props.handleClick.bind(this, VisibilityFilters.SHOW_ALL)} >
            All
          </button >
          <button type="button" className={this.getStyle(VisibilityFilters.SHOW_ACTIVE)}
                  onClick={this.props.handleClick.bind(this, VisibilityFilters.SHOW_ACTIVE)} >Active
          </button >
          <button type="button" className={this.getStyle(VisibilityFilters.SHOW_COMPLETED)}
                  onClick={this.props.handleClick.bind(this, VisibilityFilters.SHOW_COMPLETED)} >Completed
          </button >
        </div >
        <Unredo />
      </div >
    )
  }
}


export default TodoView;

