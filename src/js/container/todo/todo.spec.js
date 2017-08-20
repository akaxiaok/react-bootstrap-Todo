import {assert} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {mapStateToProps, Todo} from "./todo";
import {VisibilityFilters} from "../../actions";


describe('<Todo /> container', () => {
    const todos = [{
        id: 1,
        content: 'todo',
        edit: false,
        completed: true
    }, {
        id: 2,
        content: 'todo',
        edit: false,
        completed: false
    }];
    describe('container', () => {
        it('should render one todo', () => {
            const currentState = 'all';
            const wrapper = shallow(<Todo todos={todos} visibilityFilter={currentState}/>);
            assert.strictEqual(wrapper.find('.row').length, 2);
        })
    });
    describe('mapStateToProps', () => {
        it('should return two todos when show all', () => {
            const result = mapStateToProps({todos: {present: todos}, visibilityFilter: VisibilityFilters.SHOW_ALL})
            assert.strictEqual(result.todos.length, 2);
        })
        it('should return one todos when completed', () => {
            const result = mapStateToProps({
                todos: {present: todos},
                visibilityFilter: VisibilityFilters.SHOW_COMPLETED
            })
            assert.strictEqual(result.todos.length, 1);
        })
        it('should return one todo when active', () => {
            const result = mapStateToProps({todos: {present: todos}, visibilityFilter: VisibilityFilters.SHOW_ACTIVE})
            assert.strictEqual(result.todos.length, 1);
        })
        it('should throw error when filter not exist', () => {
            assert.throws(() => {
                mapStateToProps({todos: {present: todos}, visibilityFilter: 'other'})
            }, 'Unknown filter: other');
        })
    });
})
