import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {AuthContext} from './AuthContext'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
}
    handleSubmit = (event) => {
        console.log(this.state)
        fetch("http://localhost:3000/user/signup", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json()
        ).then((data) => {
            this.props.auth.setToken(data.sessionToken)
        })
        event.preventDefault()
    }
    validateSignUp = (event) => {
        this.setState({
            errorMessage:'Fields must not be empty'
        })
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                        {this.state.errorMessage && <span className="error">user name is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Signup </Button> 
                </Form>
            </div>
        )
    }
}
export default props => (
    <AuthContext.Consumer>
      {auth => <Signup {...props} auth={auth} />}
    </AuthContext.Consumer>
);