import React, { Component } from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        title: state.title,
        completed: state.completed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: task => dispatch(toggleTodo(task))
    };
}

class ConnectdTask extends Component {
    constructor() {
    }
    render() {
        <li className="task" onClick={props.toggleTodo}>
            <span>{text}</span>
            <span> {completed ? 'Fait !' : 'A faire'} </span>
        </li>
    }
}

const Task = connect(mapStateToProps, mapDispatchToProps)(ConnectdTask);

ConnectdTask.PropTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    toggleTodo: PropTypes.func.isRequired
}

export default Task;