const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
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
        case 'TOGGLE_TODO':
            return state.todos.map(todo =>
                (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)
        default:
            return state;
    }
}

export default todoReducer;