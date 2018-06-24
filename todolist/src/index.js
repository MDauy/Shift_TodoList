import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './components/ToDoList';
import registerServiceWorker from './registerServiceWorker'
import { Provider } from "react-redux"
import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/todo'
import sortFilterReducer from './reducers/sortFilter'

const generalReducer = combineReducers({todo : todoReducer, sortFilter : sortFilterReducer});

const store = createStore(todoReducer);

ReactDOM.render(
    <Provider store={store}>
       <ToDoList></ToDoList>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
