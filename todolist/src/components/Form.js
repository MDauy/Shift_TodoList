import { connect } from 'react-redux'
import React, {Component} from 'react'
import {addTodo} from '../actions/index'

import uuidv1 from 'uuid'


const mapDispatchToProps = dispatch => {
    addTodo: todo => dispatch(addTodo(todo))
}

class ConnectedForm extends Component {
    constructor() {
        super ();
        this.state = {
            title: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(event) {
        event.preventDefault();
        this.setState((prevState) => {
            title: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id  = uuidv1();
        this.props.addTodo({ title, id });
        this.setState({title : ''});
    }


    render() {
        const { title } = this.state;
        return (
            <form>
                <input type='text' onChange={this.onChange}
                    value={title} />
                <input type='submit' onSubmit={this.onSubmit}>
                    Créer
                </input>
            </form >
        );
    }
}

const Form = connect (ConnectedForm, mapDispatchToProps);

export default Form;