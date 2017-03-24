/**
 * Created by Kimi on 2017/3/20.
 */
import ReactDOM from 'react-dom';
import React from 'react';

let Content = React.createClass({
    render(){
        return<div className="well well-sm col-md-5">{this.props.content }</div> ;
    }
});

let DeleteButton = React.createClass({
    render(){
        return <button className="btn btn-default col-md-1">x</button>;
    }
});

let CompletBox = React.createClass({
    render(){
        return <input type="checkbox" className="col-md-1"/>
    }
});

ReactDOM.render(
    <div className="row"><CompletBox/><Content content="todo"/><DeleteButton/></div>
    , document.getElementById('example2')
);