let nextTodoId = 0;
export const addTask = text => ({
    type:'ADD_TODO',
    id: nextTodoId ++,
    text

});

export const setSortFilter = filter => ({
    type : 'SET_SORT_FILTER',
    filter
})

export const toggleTodo = id => ({
    type:'TOGGLE_TODO',
    id
})

export const SortFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}