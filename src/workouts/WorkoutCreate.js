import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {AuthContext}  from '../auth/AuthContext'

class WorkoutCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/log/`, {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken // from our context!
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateWorkoutsArray()
                this.setState({
                    message: ''
                })
            })
    }

    render() {
        return (
            <div>
                <h3>Enter a Message</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input id="message" type="text" name="message" value={this.state.message} placeholder="enter message" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}
//using authcontext and setting it to the prop called auth!
export default props => (
    <AuthContext.Consumer>
      {auth => <WorkoutCreate {...props} auth={auth} />}
    </AuthContext.Consumer>
);