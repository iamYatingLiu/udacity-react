import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
    state = {
        user: {
            username: '',
            firstname: '',
            lastname: '',
        },
        userExist: false
    };

    inputIsAnyEmpty = () => {
        const { firstname, lastname, username } = this.state.user;
        return firstname === '' || lastname === '' || username === '';
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState(previousState =>
            ({
                ...previousState,
                user: {
                    ...previousState.user,
                    [name]: value
                }
            }))
    }

    handleSubmit = event => {
        event.preventDefault();
        const userExists = this.contactExists(this.state.user.username);
        if (!userExists) {
            this.props.addItem(this.state.user);
        }
        this.setState(() => ({
            userExists,
          }));
        };

    contactExists = currentusername => {
        const users = this.props.users;
        for (let user of users) {
            if (user.username === currentusername) {
                return true;
            }
        }
        return false
    };

    render() {
        const { firstname, lastname, username } = this.state.user;
        return (
            <div>
                <h1>New User</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Enter Username" name="username"
                            value={username} onChange={this.handleChange} />
                        <input type="text" placeholder="Enter Firstname" name="firstname"
                            value={firstname} onChange={this.handleChange} />
                        <input type="text" placeholder="Enter Lastname" name="lastname"
                            value={lastname} onChange={this.handleChange} />
                    </div>
                <button disabled={this.inputIsAnyEmpty()}>Add</button>
                </form>
                {this.state.userExists ? (
                    <p className="error">You cannot add a user that already exists.</p>
                ) : (
                        ''
                    )}
            </div>
        );
    }
}

AddUser.propTypes = {
    users: PropTypes.array.required,
    addItem: PropTypes.func.required,
}
export default AddUser;