/**
 * Created by Kimi on 2017/3/20.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import Data from './tododata';

let Todo = React.createClass({
    render(){
        let lists = [];
        this.props.data.forEach(function (v, i) {
            lists.push(<div key={i} className="input-group col-md-offset-2 col-md-3">
                <CheckTodo/>
                <Content content={v.content}/>
                <DeleteTodo/>
            </div>)
        });
        return (
            <div className="container-fluid">
                {lists}
            </div>
        )
    }
});

let Content = React.createClass({
    render(){
        return <input className="form-control" defaultValue={this.props.content}/>;
    }
});
let CheckTodo = React.createClass({
    render(){
        return (
            <span className="input-group-addon ">
                <input type="checkbox" aria-label="..."/>
            </span>
        )
    }
});
let DeleteTodo = React.createClass({
    render(){
        return (
            <span className="input-group-btn">
                <button className="btn btn-default" type="button">Delete</button>
            </span>
        );
    }
});

ReactDOM.render(
    <div className="row"><Todo data={Data}/></div>
    , document.getElementById('example2')
);