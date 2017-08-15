import React from 'react';
import sinon from 'sinon';
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import AddTodo from './addtodo';
import {VisibilityFilters} from '../../actions';

const jsdom = require('jsdom').jsdom;


describe('<AddTodo />', () => {


    it('should add a new todo', () => {
        let target = '';
        const wrapper = shallow(
            <AddTodo setVisibilityFilter={() => {
            }} addTodo={(value) => {
                target = value
            }}/>
        );
        const input = wrapper.find('input');
        input.simulate('change', {target: {value: 'new todo'}})
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {
            }, target: jsdom('<input/>')
        });
        assert.strictEqual(target, 'new todo', 'todo added');
    })
    it('should change filter to show_active', () => {
        let target = '';
        const spy = sinon.spy();
        const wrapper = shallow(
            <AddTodo visibilityFilter={VisibilityFilters.SHOW_COMPLETED} setVisibilityFilter={spy} addTodo={(value) => {
                target = value
            }}/>
        );
        wrapper.find('input').simulate('change', {target: {value: 'new todo'}})
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {
            }, target: jsdom('<input/>')
        });
        assert.strictEqual(spy.calledOnce, true);
    })
});