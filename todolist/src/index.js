import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './components/ToDoList';
import registerServiceWorker from './registerServiceWorker'
import {generalStore} from './store'



ReactDOM.render(
    
    <Provider store={generalStore}>
    <ToDoList />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
