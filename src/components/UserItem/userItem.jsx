import React from 'react';
import Card from 'react-bootstrap/Card'


export default class UserItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <Card style={{ width: '15rem', height: '30rem', margin: '5px' }}>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>Name: {this.props.firstname} {this.props.lastname}</Card.Title>
                        <Card.Text>Phone: {this.props.phone}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Age: {this.props.age}</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}