/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';
class TodoContent extends React.Component {
    componentDidUpdate() {
        if (this.inputText) {
            this.inputText.focus();
        }
    }
    render() {
        if (this.props.todo.edit === true) {
            return (
                <label className="col-sm-4 col-xs-8" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    <input className="form-control" defaultValue={this.props.todo.content}
                           onBlur={this.props.handleBlur.bind(this, this.props.id)}
                           ref={input => this.inputText = input}/>
                </label>
            )
        }
        else {
            return (
                <label className="col-sm-4 col-xs-8" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                     <span style={{position: 'absolute'}}>
                        <input type="checkbox" className="awesome" id={'checkbox' + this.props.id}
                               onChange={this.props.handleClick.bind(this, this.props.id)}
                               checked={this.props.todo.completed}/>
                         <label htmlFor={'checkbox' + this.props.id}/>
                     </span>
                    <span style={{marginLeft: '1em', whiteSpace: 'nowrap'}}>{this.props.todo.content}</span>
                </label>

            )
        }
    }
}


export default TodoContent;