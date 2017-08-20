import {assert} from 'chai';
import sinon from 'sinon';
import React from 'react';
import {shallow, mount} from 'enzyme';
import {mapDispatchToProps} from "./todocontent";
import {toggleTodo, endEdit} from "../../actions";

describe('<TodoContent /> container', () => {
    describe('mapDispatchToProps', () => {
        describe('handeClick', () => {
            it('should dispatch handeClick when called', () => {
                const dispatch = sinon.spy();
                const result = mapDispatchToProps(dispatch);
                const id = 1;
                result.handleClick(id);
                assert.strictEqual(dispatch.calledWith(toggleTodo(id)), true);
            })
        })
        describe('handeBlur', () => {
            it('should dispatch handeClick when called', () => {
                const dispatch = sinon.spy();
                const result = mapDispatchToProps(dispatch);
                const id = 1;
                const event = {target: {value: 'value'}};
                result.handleBlur(id, event);
                assert.strictEqual(dispatch.calledWith(endEdit(id, event.target.value)), true);
            })
        })
    });
})
