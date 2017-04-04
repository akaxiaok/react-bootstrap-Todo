/**
 * Created by Kimi on 2017/4/3.
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const START_EDIT = 'START_EDIT';
export const END_EDIT = 'END_EDIT';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER ';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function startEdit(todo) {
    return {
        type: START_EDIT,
        todo
    }
}
export function endEdit(todo, value) {
    return {
        type: END_EDIT,
        todo,
        value
    }
}

export function addTodo(text) {
    return {
        type: ADD_TODO, text
    }
}
export function toggleTodo(todo) {
    return {
        type: TOGGLE_TODO, todo
    }
}
export function deleteTodo(todo) {
    return {
        type: DELETE_TODO, todo
    }
}

export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
}