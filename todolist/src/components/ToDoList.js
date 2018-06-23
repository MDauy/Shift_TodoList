import React, { Component } from "react";
import Todo from '../components/Todo'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Form from './Form'

const mapStateToProps = state => {
    todos: state.todos
}

class ConnectedToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Form />
                <div className="todolist">
                    <div className="tasks_list">
                        <ul>
                            {this.props.todos.map(todo =>
                                <Todo text={todo.title} />)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const ToDoList = connect(mapStateToProps)(ConnectedToDoList)

ConnectedToDoList.PropTypes = {
    todos: PropTypes.array
}
export default ToDoList;