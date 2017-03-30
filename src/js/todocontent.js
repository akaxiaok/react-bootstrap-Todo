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
    componentDidUpdate = () => {
        console.log('did');
    }
    componentWillReceiveProps = () => {
        console.log('will');
    }
    handleBlur = (e) => {
        this.props.data.content = e.target.value;
        this.props.setChange(this.props.data)
    }
    render() {

        if (this.props.data.edit === true) {
            return (
                <label className="col-sm-4 col-xs-8" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    <input className="form-control" defaultValue={this.props.data.content} onBlur={this.handleBlur}/>
                </label>
            )
        }
        else {
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
}

export default TodoContent;