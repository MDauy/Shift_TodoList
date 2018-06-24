import { connect } from 'react-redux'
import React, {Component} from 'react'
import {addTodo} from '../actions/index'
import uuidv1 from 'uuid'


const mapDispatchToProps = dispatch => {
    return {
    addTodo: todo => dispatch(addTodo(todo))}
}

class ConnectedForm extends Component {
    constructor() {
        super ();
        this.state = {
            title : ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id  = uuidv1();
        this.props.addTodo({ title, id });
        this.setState({title : ""});
    }


    render() {
        const  title  = this.state.title;
        return (
            <form onSubmit={this.onSubmit} >
                <input type='text' onChange={this.onChange}
                    value={title} />
                <button type='submit' >
                Créer
                </button>
            </form >
        );
    }
}

const Form = connect (null,mapDispatchToProps)(ConnectedForm);

export default Form;