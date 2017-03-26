/**
 * Created by Kimi on 2017/3/20.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import Data from './tododata';
let thisData = Data;
console.log(thisData);
let Todo = React.createClass({
    handleDelete(i){
        thisData.splice(i, 1);
        console.log(thisData);
        this.setState({
            data: thisData
        })
    },
    render(){
        let lists = [];
        let data = this.props.data;
        let handle = this.handleDelete;
        data.forEach(function (v, i) {
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
            console.log(this.props.onDelete);
            this.props.onDelete(this.props.id);
        }
    }
);

ReactDOM.render(
    <Todo data={thisData}/>
    , document.getElementById('todo')
);