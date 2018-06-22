import React, { Component } from "react";

class Task extends Component {
    constructor(props) {
        this.state = {
            title: "",
            due_date: ""
        }
    }
    render() {
        <li className="task" onClick={props.onClick}>
            <span>{this.state.title}</span>
            <span>{this.state.due_date}</span>
        </li>
    }
}

export default Task;