import {assert} from 'chai';
import sinon from 'sinon';
import React from 'react';
import {shallow, mount} from 'enzyme';
import {mapDispatchToProps, container} from "./deletetodo";
import {deleteTodo} from "../../actions";

describe('<DeleteTodo /> container', () => {
    describe('container', () => {
        it('should render as delete', () => {
            const spy = sinon.spy();
            const wrapper = shallow(container({handleClick: spy}));
            assert.strictEqual(wrapper.find('.glyphicon-remove').length, 1);
        })
    });
    describe('mapDispatchToProps', () => {
        describe('handeClick', () => {
            it('should dispatch handeClick when called', () => {
                const dispatch = sinon.spy();
                const result = mapDispatchToProps(dispatch);
                const id = 1;
                result.handleClick(id);
                assert.strictEqual(dispatch.calledWith(deleteTodo(id)), true);
            })
        })
    });
})
