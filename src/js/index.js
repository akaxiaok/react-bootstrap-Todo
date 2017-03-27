/**
 * Created by Kimi on 2017/3/20.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import data from './tododata';
let Todo = React.createClass({
    getInitialState(){
        return {
            data: data,
        }
    },
    handleDelete(i){
        this.state.data.splice(i, 1);
        this.setState({
            data: data,
        });
    },
    render(){
        let lists = [];
        let handle = this.handleDelete;
        this.state.data.forEach(function (v, i) {
            console.log(v, i);
            lists.push(
                <div key={i} className="" style={{fontSize: '24px'}}>
                    <CheckTodo id={i} content={v.content}/>
                    <DeleteTodo id={i} onDelete={handle}/>
                </div>)
        });
        return (
            <div className="container">
                {lists}
            </div>
        )
    },

});

let Content = React.createClass({
    render(){
        return <input className="form-control" defaultValue={this.props.content}/>;
    }
});
let CheckTodo = React.createClass({
    render(){
        return (
            <span>
                <input type="checkbox" className="awesome" id={'checkbox' + this.props.id}/>
                < label htmlFor={'checkbox' + this.props.id}>{this.props.content}</label>
            </span>
        )
    }
});
let DeleteTodo = React.createClass({
        render(){
            return (
                <a type="button" className="" href="#" style={{marginLeft: '.1em', verticalAlign: '-.1em'}}
                   onClick={this.handleClick}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"/>
                </a>
            );
        },
        handleClick(){
            this.props.onDelete(this.props.id);
        }
    }
);

ReactDOM.render(
    <Todo />
    , document.getElementById('todo')
);