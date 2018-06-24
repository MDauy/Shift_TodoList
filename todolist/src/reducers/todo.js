import {CONSTS} from "../consts"
import array from "lodash/array"

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTS.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    completed: false
                }
                ]
            }
        case CONSTS.TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map(todo =>
                    (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)
            })
            case CONSTS.DELETE_TODO:
            return Object.assign ({}, state, {
                todos : array.remove (state.todos, function (todo){
                    return todo.id !== action.id;
                })
            })
        default:
            return state;
    }
}

export default todoReducer;