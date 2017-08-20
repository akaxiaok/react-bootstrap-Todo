import {assert} from 'chai';
import sinon from 'sinon';
import React from 'react';
import {mapDispatchToProps, mapStateToProps} from "./todoview";
import {setVisibilityFilter} from "../../actions";

describe('<TodoView /> container', () => {
    describe('mapStateToProps', () => {
        const result = mapStateToProps({visibilityFilter: 'filter'});
        it('should return currentState filter', () => {
            assert.strictEqual(result.currentState, 'filter');
        })
    });
    describe('mapDispatchToProps', () => {
        describe('handleClick', () => {
            it('should dispatch handleClick when called', () => {
                const dispatch = sinon.spy();
                const result = mapDispatchToProps(dispatch);
                const filter = 'filter';
                result.handleClick(filter);
                assert.strictEqual(dispatch.calledWith(setVisibilityFilter(filter)), true);
            })
        })
    });
})
