import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions/index'

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id)),
        deleteTodo : id => dispatch(deleteTodo(id))
    };
}

class ConnectdTodo extends Component {
    constructor(props) {
        super(props);
        this.onCheck = this.onCheck.bind(this);
        this.delete = this.delete.bind(this);
    }

    onCheck(event) {
        this.props.toggleTodo(this.props.id);
    }

    delete (event){
        this.props.deleteTodo(this.props.id);
    }


    render() {
        return (
            <li className="todo">
                <span>{this.props.title}-</span>                
                <input type="checkbox" checked={this.props.completed} onChange={this.onCheck} />
                <span> {this.props.completed ? 'Fait !' : 'A faire'} </span>
                <button onClick={this.delete}>Supprimer</button>
            </li>
        )
    }
}

const Todo = connect(null, mapDispatchToProps)(ConnectdTodo);

ConnectdTodo.PropTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    toggleTodo: PropTypes.func.isRequired
}

export default Todo;