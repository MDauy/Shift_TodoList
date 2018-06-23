import {createStore, combineReducers} from 'redux'
import todo from './reducers/todo'
import sortFilter from './reducers/sortFilter'

const generalReducer = combineReducers (todo, sortFilter);

const store = createStore(generalReducer);

store.subscribe (() => {console.log(store.state)});

