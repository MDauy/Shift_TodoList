const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos : state.todos.concat (
                    {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false}
                )
            }
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)
        default:
            return state;
    }
}

export default todo;