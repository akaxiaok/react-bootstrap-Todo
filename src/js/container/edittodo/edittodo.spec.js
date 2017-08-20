import {assert} from 'chai';
import sinon from 'sinon';
import React from 'react';
import {shallow, mount} from 'enzyme';
import {mapDispatchToProps, container} from "./edittodo";
import {startEdit} from "../../actions";

describe('<EditTodo /> container', () => {
    describe('container', () => {
        it('should render as edit', () => {
            const spy = sinon.spy();
            const wrapper = shallow(container({handleClick: spy}));
            assert.strictEqual(wrapper.find('.glyphicon-edit').length, 1);
        })
    });
    describe('mapDispatchToProps', () => {
        describe('handeClick', () => {
            it('should dispatch handeClick when called', () => {
                const dispatch = sinon.spy();
                const result = mapDispatchToProps(dispatch);
                const id = 1;
                result.handleClick(id);
                assert.strictEqual(dispatch.calledWith(startEdit(id)), true);
            })
        })
    });
})
