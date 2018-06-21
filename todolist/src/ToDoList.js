import React, { Component } from "react";

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
                <form onSubmit={this.addTask}>
                    <input ref={(a) => this._inputTask = a} placeholder="nom de la tâche" />
                    <button type="submit">créer</button>
                </form>
                <div className="tasks_list">
                    <ul>

                    </ul>
                </div>
            </div>
        )
    }

    addTask(t) {
        if (this._inputTask.value !== "") {
            var newTask = {
                text: this._inputTask.value
            };
        }

        this.setState((prevstate) => {
            return {
                items: prevstate.items.concat(newTask)
            };
        });

        this._inputTask.value = "";
    }
}

export default ToDoList;