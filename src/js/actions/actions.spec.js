import {assert} from 'chai';
import React from 'react';
import * as Action from './actions';

describe('actions', () => {
    describe('stratEdit', () => {
        it('should create an action to start edit', () => {
            const id = 1;
            const expect = {
                type: Action.START_EDIT,
                id
            }
            assert.deepEqual(Action.startEdit(id), expect);
        })
    })
    describe('endEdit', () => {
        it('should create an action to end edit', () => {
            const id = 1;
            const value = 'new todo';
            const expect = {
                type: Action.END_EDIT,
                id,
                value
            }
            assert.deepEqual(Action.endEdit(id, value), expect);
        })
    })
    describe('addTodo', () => {
        it('should create an action to add todo', () => {
            const text = 'new todo';
            const expect = {
                type: Action.ADD_TODO,
                text
            }
            assert.deepEqual(Action.addTodo(text), expect);
        })
    })
    describe('toggleTodo', () => {
        it('should create an action to toggle todo', () => {
            const id = 1;
            const expect = {
                type: Action.TOGGLE_TODO,
                id
            }
            assert.deepEqual(Action.toggleTodo(id), expect);
        })
    })
    describe('deleteTodo', () => {
        it('should create an action to delete todo', () => {
            const id = 1;
            const expect = {
                type: Action.DELETE_TODO,
                id
            }
            assert.deepEqual(Action.deleteTodo(id), expect);
        })
    })
    describe('setVisibilityFilter', () => {
        it('should create an action to set visibility filter', () => {
            const filter = 'filter';
            const expect = {
                type: Action.SET_VISIBILITY_FILTER,
                filter
            }
            assert.deepEqual(Action.setVisibilityFilter(filter), expect);
        })
    })
})