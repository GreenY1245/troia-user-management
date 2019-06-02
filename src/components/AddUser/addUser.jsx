import React from 'react';

import { connect } from 'react-redux'
import { addUser } from '../../actions/users.actions'

import './addUser.css'

class AddUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            image: "",
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addUser(this.state);
    }

    handleChange = e => {
        console.log(e.target.name + " " + e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateForm = e => {
        return this.state.firstname.length > 0 && this.state.lastname.length > 0 && this.state.phone.length > 0 && this.state.image.length > 0;
    }

    render() {
        return (
            <div>
                <form id="loginform" onSubmit={this.handleSubmit}>
                    <input placeholder="First name" id="firstname" type="text" name="firstname" autoFocus onChange={this.handleChange} value={this.state.firstname} />
                    <input placeholder="Last name" id="lastname" type="text" name="lastname" onChange={this.handleChange} value={this.state.lastname} />

                    <input placeholder="Phone number" id="phone" type="tel" name="phone" onChange={this.handleChange} value={this.state.phone} />

                    <input placeholder="image url" id="image" type="text" name="image" onChange={this.handleChange} value={this.state.image} />

                    <input id="loginbutton" type="submit" name="submit" value="Submit" disabled={!this.validateForm} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (({ users }) => {

    if (users.status) {
        console.log(users);
    }

    return {
        users
    }
})

export default connect(mapStateToProps, { addUser })(AddUser);