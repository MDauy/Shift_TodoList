import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './components/ToDoList';
import registerServiceWorker from './registerServiceWorker'
import { Provider } from "react-redux"
import { createStore } from 'redux'
import todoReducer from './reducers/todo'


const persistedState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : undefined;
const store = createStore(todoReducer, persistedState);
store.subscribe (() =>{
    localStorage.setItem('todos', JSON.stringify(store.getState()));
});
ReactDOM.render(
    <Provider store={store}>
       <ToDoList></ToDoList>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
