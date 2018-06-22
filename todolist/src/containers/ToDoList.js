import React, { Component } from "react";
import Task from '../components/Task'
import { toggleTodo, addTodo } from "../actions/index";

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taks: []
        };

        this.addTask = this.addTask.bind(this);
    }

    render() {
        return (
            <div className="todolist">
                <form onSubmit={addTodo(this._inputTask.value)}>
                    <input ref={(a) => this._inputTask = a} placeholder="nom de la tâche" />
                    <button type="submit">créer</button>
                </form>
                <div className="tasks_list">
                    <ul>
                        {props.todos.map(todo =>
                            <Task title={todo.text} onClick={() => props.toggleTodo(todo.id)} />)}
                    </ul>
                </div>
            </div>
        )
    }    
}

export default ToDoList;