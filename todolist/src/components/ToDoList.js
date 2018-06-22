import React, { Component } from "react";
import Task from '../components/Task'
import { toggleTodo, addTodo } from "../actions/index";
import PropTypes from 'prop-types'
import connect from 'react-redux'

const mapStateToProps = state => {
    tasks: state.tasks
}

class ConnectedToDoList extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
    }

    render() {
        return (
            <div className="todolist">                
                <div className="tasks_list">
                    <ul>
                        {tasks.map(todo =>
                            <Task text={todo.text}/>)}
                    </ul>
                </div>
            </div>
        )
    }
}

const ToDoList = connect (mapStateToProps)(ConnectedToDoList)

ConnectedToDoList.PropTypes = {
    tasks: PropTypes.array
}
export default ToDoList;