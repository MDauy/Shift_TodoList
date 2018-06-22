import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './actions/components/ToDoList';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <div>
    <ToDoList />
    </div>, document.getElementById('root'));
registerServiceWorker();
