/**
 * Created by Kimi on 2017/3/27.
 */
import React from 'react';

const modify = (props) => {
    console.log(props);
    const className = `glyphicon glyphicon-${props.action}`;
    return (
        <a type="button" className="" style={{marginLeft: '.1em', verticalAlign: '-.1em'}}
           onClick={props.handleClick.bind(this, props.id)}>
            <span className={className} aria-hidden="true"/>
        </a>
    );
}

export default modify;
