import React from "react";
import Todo from '../components/Todo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from './Form'

const mapStateToProps = state => {
    return { todos: state.todos }
}

const ConnectedToDoList = ({ todos }) => {
    return (
    <div>
        <Form></Form>
        <div className="todolist">
            <div className="tasks_list">
                <ul>
                    {todos.map(todo =>
                        <Todo title={todo.title} completed={todo.completed} id={todo.id}/>)}
                </ul>
            </div>
        </div>
    </div>
    )
}   

ConnectedToDoList.PropTypes = {
    todos: PropTypes.array
}

const ToDoList = connect(mapStateToProps)(ConnectedToDoList)
export default ToDoList;