/**
 * Created by Kimi on 2017/4/3.
 */
import {VisibilityFilters} from './actions'
import  {START_EDIT, END_EDIT, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, DELETE_TODO} from './actions';
import Guid from 'guid';
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [
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
    ]
};

export function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        id: Guid.raw(),
                        content: action.text,
                        completed: false,
                        edit: false
                    }
                ],
                visibilityFilter: state.visibilityFilter === VisibilityFilters.SHOW_COMPLETED ? VisibilityFilters.SHOW_ACTIVE : state.visibilityFilter
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (todo === action.todo) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            });
        case DELETE_TODO:
            console.log(action.todo);
            state.todos.splice(state.todos.indexOf(action.todo), 1);
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => todo)
            });
        case START_EDIT:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if (todo === action.todo) {
                        return Object.assign({}, todo, {
                            edit: true
                        })
                    }
                    else {
                        return todo;
                    }
                })
            });
        case END_EDIT:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if (todo === action.todo) {
                        return Object.assign({}, todo, {
                            content: action.value,
                            edit: false
                        })
                    }
                    else {
                        return todo;
                    }
                })
            });
        default:
            return state;
    }
}

