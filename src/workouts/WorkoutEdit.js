import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class WorkoutEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            message: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.workouts.id,
            result: this.props.message,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Type a message!</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input id="message" type="text" name="message" value={this.state.message} placeholder="enter message" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}

export default WorkoutEdit;