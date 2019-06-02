import React from 'react';

import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/users.actions'

import CardGroup from 'react-bootstrap/CardGroup'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import UserItem from '../UserItem/userItem'
import './userList.css'

import AddUser from '../AddUser/addUser'

class UserList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            show: false
        }
    }

    componentDidMount() {

        this.props.fetchUsers();
    }

    modalHandleVisibility = () => {
        
        this.state.show ? this.setState({ show: false }) : this.setState({ show: true })
    }

    render() {

        return (
            <div className="UserListMain">

                <Button className="ModalButton" variant="outline-dark" onClick={this.modalHandleVisibility}>
                    Add User
                </Button>

                <Modal show={this.state.show} onHide={this.modalHandleVisibility}>

                    <Modal.Body>
                        <AddUser />
                    </Modal.Body>
                </Modal>

                <div className="UserListItem">
                    <CardGroup>
                        {
                            this.props.users.users && this.props.users.users.map(user => {
                                return (<UserItem key={user.registered.date} image={user.picture.large} firstname={user.name.first} lastname={user.name.last} phone={user.phone} age={user.dob.age} />)
                            })
                        }
                    </CardGroup>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (({ users }) => {

    if (users.status && users.status === "failure") {
        console.log(users);
    }

    return {
        users
    }
})

export default connect(mapStateToProps, { fetchUsers })(UserList);