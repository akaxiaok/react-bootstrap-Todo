import {assert} from 'chai';
import React from 'react';
import * as Action from '../actions';
import Todos, {visibilityFilter, todos} from "./reducer";

describe('reducer', () => {
    describe('visibilityFilter reducer', () => {
        it('should return the initial state', () => {
            assert.strictEqual(visibilityFilter(Action.VisibilityFilters.SHOW_ALL, {}), Action.VisibilityFilters.SHOW_ALL)
        })
        it('should handle SET_VISIBILITY_FILTER', () => {
            const action = {
                type: Action.SET_VISIBILITY_FILTER,
                filter: Action.VisibilityFilters.SHOW_ACTIVE
            }
            assert.strictEqual(visibilityFilter(Action.VisibilityFilters.SHOW_ALL, action), Action.VisibilityFilters.SHOW_ACTIVE)
        })
    })
    describe('todos', () => {
        const state = [{
            id: 1,
            content: 1,
            completed: false,
            edit: false
        }, {
            id: 2,
            content: 2,
            completed: false,
            edit: false
        }]
        it('should return initial state', () => {
            assert.deepEqual(todos(state, {}), state)
        })

        it('should handle TOGGLE_TODO', () => {
            const action = {
                type: Action.TOGGLE_TODO,
                id: 1
            }
            const expected = [{
                id: 1,
                content: 1,
                completed: true,
                edit: false
            }, {
                id: 2,
                content: 2,
                completed: false,
                edit: false
            }]
            assert.deepEqual(todos(state, action), expected)
        })
        it('should handle DELETE_TODO', () => {
            const action = {
                type: Action.DELETE_TODO,
                id: 1
            }
            const expected = [{
                id: 2,
                content: 2,
                completed: false,
                edit: false
            }]
            assert.deepEqual(todos(state, action), expected)
        })

        it('should handle START_EDIT', () => {
            const action = {
                type: Action.START_EDIT,
                id: 1
            }
            const expected = [{
                id: 1,
                content: 1,
                completed: false,
                edit: true
            }, {
                id: 2,
                content: 2,
                completed: false,
                edit: false
            }]
            assert.deepEqual(todos(state, action), expected)
        })
        it('should handle END_EDIT', () => {
            const action = {
                type: Action.END_EDIT,
                id: 1,
                value: 2
            }
            const init = [{
                id: 1,
                content: 1,
                completed: false,
                edit: true
            }, {
                id: 2,
                content: 2,
                completed: false,
                edit: false
            }]
            const expected = [{
                id: 1,
                content: 2,
                completed: false,
                edit: false
            }, {
                id: 2,
                content: 2,
                completed: false,
                edit: false
            }]
            assert.deepEqual(todos(init, action), expected)
        })
        it('should handle ADD_TODO', () => {
            const action = {
                type: Action.ADD_TODO,
                text: 'new'
            }
            const actual = todos([], action);
            assert.strictEqual(actual.length === 1 && actual[0].content === 'new', true);
        })
    })
})