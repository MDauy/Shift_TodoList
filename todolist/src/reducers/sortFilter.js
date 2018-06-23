const sortFilter = (state, action) => {
    switch (action.type) {
        case 'SET_SORT_FILTER':
            return action.filter;
        default:
            return state
    }

}

export default sortFilter;