import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import sinon from 'sinon';
import ModifyTodo from './modifytodo';

describe('<ModifyTodo />', () => {
    const spy = sinon.spy();
    const wrapper = shallow(
        <ModifyTodo handleClick={spy} action="edit"/>
    );

    it('should shows as edit', () => {
        assert.strictEqual(wrapper.find('.glyphicon-edit').length, 1);
    })
    it('should trigger handleClick when clicked', () => {
        wrapper.simulate('click');
        assert.strictEqual(spy.calledOnce, true);
    })
})