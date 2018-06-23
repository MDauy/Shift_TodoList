import { ADD_TODO, TOGGLE_TODO, SET_SORT_FILTER } from '../consts';

let nextTodoId = 0;
export const addTodo = todo => ({
    type:ADD_TODO,
    payload : {
        id : todo.id,
        title : todo.title
    }
});

export const setSortFilter = filter => ({
    type : SET_SORT_FILTER,
    filter
})

export const toggleTodo = id => ({
    type:TOGGLE_TODO,
    id
})

export const SortFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}