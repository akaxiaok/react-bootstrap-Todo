import {assert} from 'chai';
import sinon from 'sinon';
import React from 'react';
import {ActionCreators} from 'redux-undo';
import {shallow, mount} from 'enzyme';
import {mapDispatchToProps, mapStateToProps} from "./unredo";

describe('<Unredo /> container', () => {
    describe('mapStateToProps', () => {
        const result = mapStateToProps({todos: {past: [{}], future: [{}]}});
        it('should return canUndo true', () => {
            assert.strictEqual(result.canUndo, true);
        })
        it('should return canUndo true', () => {
            assert.strictEqual(result.canRedo, true);
        })
    });
    describe('mapDispatchToProps', () => {
        describe('undo', () => {
            it('should dispatch undo when called', () => {
                const dispatch = sinon.spy();
                const result = mapDispatchToProps(dispatch);
                result.undo();
                assert.strictEqual(dispatch.calledWith(ActionCreators.undo()), true);
            })
        })
        describe('redo', () => {
            it('should dispatch redo when called', () => {
                const dispatch = sinon.spy();
                const result = mapDispatchToProps(dispatch);
                result.redo();
                assert.strictEqual(dispatch.calledWith(ActionCreators.redo()), true);
            })
        })
    });
})
