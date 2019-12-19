import React, { Component } from 'react';

class UserList extends Component {
    render() {
        const users = this.props.users;

        if (!users || Object.keys(users).length === 0) {
            return <p>None of the current users liked this movie.</p>;
        }
        else {
            return (
                <ul>
                    {Object.keys(users).map((userid) => <li>{users[userid].name}</li>)}
                </ul>
            );
        }
    }
}

export default UserList;