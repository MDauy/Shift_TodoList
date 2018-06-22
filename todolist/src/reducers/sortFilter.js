import { SortFilters } from '../actions'

const sortFilter = (state, action) => {
    switch (action.type) {
        case 'SET_SORT_FILTER':
            return action.filter;
        default:
            return state
    }

}

export default SortFilter;