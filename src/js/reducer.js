/**
 * Created by Kimi on 2017/4/3.
 */
import {VisibilityFilters} from './actions'
import  {START_EDIT, END_EDIT, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, DELETE_TODO} from './actions';
import Guid from 'guid';
import {combineReducers} from 'redux';
const initialState = [
    {
        id: Guid.raw(),
        content: '1',
        completed: false,
        edit: false
    },
    {
        id: Guid.raw(),
        content: '2',
        completed: false,
        edit: false
    },
    {
        id: Guid.raw(),
        content: '3',
        completed: true,
        edit: false
    }
];


function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}


function todos(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (action.todo === todo) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                else {
                    return todo;
                }
            });
        case DELETE_TODO:
            state.splice(state.indexOf(action.todo), 1);
            return state.map((todo) => todo);
        case START_EDIT:
            return state.map((todo) => {
                if (action.todo === todo) {
                    return Object.assign({}, todo, {
                        edit: true
                    })
                }
                else {
                    return todo;
                }
            });
        case END_EDIT:
            return state.map((todo) => {
                if (action.todo === todo) {
                    return Object.assign({}, todo, {
                        content: action.value,
                        edit: false
                    })
                }
                else {
                    return todo;
                }
            });
        case ADD_TODO:
            return [
                ...state,
                {
                    id: Guid.raw(),
                    content: action.text,
                    completed: false,
                    edit: false
                }
            ];
        default:
            return state;
    }
}

export const todoApp = combineReducers({
    visibilityFilter,
    todos
});

