import {assert} from 'chai';
import sinon from 'sinon';
import {mapDispatchToProps, mapStateToProps} from "./addtodo";
import {addTodo, setVisibilityFilter} from "../../actions";

describe('<AddTodo /> container', () => {
    describe('mapStateToProps', () => {
        it('should return filter', () => {
            assert.strictEqual(mapStateToProps({visibilityFilter: 'filter'}).visibilityFilter, 'filter');
        })
    });
    describe('mapDispatchToProps', () => {
        describe('addTodo', () => {
            it('should dispatch addTodo when called', () => {
                const dispatch = sinon.spy();
                const result = mapDispatchToProps(dispatch);
                const value = 'new todo';
                result.addTodo(value);
                assert.strictEqual(dispatch.calledWith(addTodo(value)), true);
            })
        })
        describe('setVisibilityFilter', () => {
            it('should dispatch setVisibilityFilter when called', () => {
                const dispatch = sinon.spy();
                const result = mapDispatchToProps(dispatch);
                const value = 'filter';
                result.setVisibilityFilter(value);
                assert.strictEqual(dispatch.calledWith(setVisibilityFilter(value)), true);
            })
        })
    });
})
