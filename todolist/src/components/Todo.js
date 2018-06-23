import React, { Component } from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {toggleTodo} from '../actions/index'

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

class ConnectdTodo extends Component {
    constructor() {
        super ();
    }
    render() {
        return (
        <li className="task" onClick={this.props.toggleTodo}>
            <span>{this.props.title}</span>
            <span> {this.props.completed ? 'Fait !' : 'A faire'} </span>
        </li>
        )
    }
}

const Todo = connect(mapStateToProps, mapDispatchToProps)(ConnectdTodo);

ConnectdTodo.PropTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    toggleTodo: PropTypes.func.isRequired
}

export default Todo;