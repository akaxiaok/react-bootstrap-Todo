/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';

class TodoContent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = e => {
        this.props.toggle(this.props.data);
    }

    render() {
        return (
            <label className="col-sm-4 col-xs-8" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                <span style={{position: 'absolute'}}>
                        <input type="checkbox" className="awesome" id={'checkbox' + this.props.id}
                               onChange={this.handleClick} checked={this.props.data.completed}/>
                        <label className=""/>
                </span>
                <span style={{marginLeft: '1em',}}>{this.props.data.content}</span>
            </label>
        )
    }
}

export default TodoContent;