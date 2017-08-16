import React from 'react';
import sinon from 'sinon';
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import TodoContent from './todocontent';
import JSDOM from '../../../test/jsdom';

describe('<TodoContent />', () => {
    const blurSpy = sinon.spy();
    const clickSpy = sinon.spy();
    it('should render checkbox  when edit is false', () => {
        const todo = {content: 'todo content', complete: true, edit: false};
        const wrapper = shallow(<TodoContent handleClick={clickSpy} handleBlur={blurSpy} todo={todo} id="1"/>)
        assert.isOk(wrapper.find('[type="checkbox"]'), 'this is checkbox')
    })
    it('should contain class from-control when edit is true', () => {
        const todo = {content: 'todo content', complete: true, edit: true};
        const wrapper = shallow(<TodoContent handleClick={clickSpy} handleBlur={blurSpy} todo={todo} id="1"/>)
        assert.isOk(wrapper.find('.form-control'), 'this is checkbox')
    })
    it('should trigger handleClick when change', () => {
        const todo = {content: 'todo content', complete: false, edit: false};
        const wrapper = shallow(<TodoContent handleClick={clickSpy} handleBlur={blurSpy} todo={todo} id="1"/>)
        wrapper.find('input').simulate('change');
        assert.isOk(clickSpy.calledOnce, 'handleClick is called')
    })
    it('should componentDidUpdate run', () => {
        const todo = {content: 'todo content', complete: false, edit: false};
        sinon.spy(TodoContent.prototype, 'componentDidUpdate')
        const wrapper = mount(<TodoContent handleClick={clickSpy} handleBlur={blurSpy} todo={todo} id="1"/>)
        wrapper.setProps({todo: {edit: true}});
        assert.strictEqual(TodoContent.prototype.componentDidUpdate.calledOnce, true)
    })

})