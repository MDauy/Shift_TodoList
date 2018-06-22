import {createStore} from 'redux'
import todo from './reducers/todo'
import sortFilter from './reducers/sortFilter'

const todoStore = createStore(todo);
const sortFilterStore = createStore(sortFilter)
