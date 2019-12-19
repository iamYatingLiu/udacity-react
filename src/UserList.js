import React, { Component } from 'react';

class UserList extends Component {
    render() {
        const users = this.props.users;
      return (
        <ul>
            {Object.keys(users).map((userid) => <li>{users[userid].name}</li>)}
        </ul>
      );
    }
  }
  
  export default UserList;