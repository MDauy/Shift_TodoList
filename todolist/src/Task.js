import React, { Component } from "react";

class Task extends Component {
    constructor(props) {
        this.state = {
            title: "",
            due_date: ""
        }
    }
    render() {
        <div className="task">
            <button className="delete_button" onClick={() => {

            }} />
            <span>{this.state.title}</span>
            <span>{this.state.due_date}</span>
        </div>
    }
}

export default Task;