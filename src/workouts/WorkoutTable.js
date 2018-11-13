import React from 'react';
import { Table, Button } from 'reactstrap';

const WorkoutTable = (props) => {
    return (
        <div>
            <h3>Workout History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
{
    props.workouts.map((workout, id) => {
        return (
            <tr key={id}>
                <th scope="row">{workout.id}</th>
                <td>{workout.message}</td>
                <td>
                    
                    <Button id={workout.id} onClick={props.delete} color="danger">Delete</Button>
                    <Button id={workout.id} onClick={e => props.update(e, workout)} color="warning">Update</Button>
                </td>
            </tr>
        )
    })
}
                </tbody>
            </Table>
        </div>
    );
}

export default WorkoutTable;