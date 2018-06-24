import {CONSTS} from '../consts';

export const addTodo = todo => ({
    type: CONSTS.ADD_TODO,
    payload: {
        id: todo.id,
        title: todo.title
    }
});

export const toggleTodo = id => ({
    type: CONSTS.TOGGLE_TODO,
    id
})

export const deleteTodo = id => (
    {
        type: CONSTS.DELETE_TODO,
        id
    })