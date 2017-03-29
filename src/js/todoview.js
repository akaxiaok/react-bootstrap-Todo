/**
 * Created by Kimi on 2017/3/28.
 */
import React from 'react';
const VIEW_STATE = {
    all: 1,
    active: 2,
    completed: 3,
};
class TodoView extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (x, e) => {
        console.log(e.target.subli);
        this.props.onSwitch(x);
    }
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
            <div className="btn-group view-buttons" role="group" aria-label="...">
                <button type="button" className={this.getStyle(VIEW_STATE.all)}
                        onClick={this.handleClick.bind(this, VIEW_STATE.all)}>
                    All
                </button>
                <button type="button" className={this.getStyle(VIEW_STATE.active)}
                        onClick={this.handleClick.bind(this, VIEW_STATE.active)}>Active
                </button>
                <button type="button" className={this.getStyle(VIEW_STATE.completed)}
                        onClick={this.handleClick.bind(this, VIEW_STATE.completed)}>Completed
                </button>
            </div>
        )
    }
}
export {TodoView, VIEW_STATE};

