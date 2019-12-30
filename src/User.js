import React, { Component } from 'react';
import PropTypes from 'prop-types';


const User = props => {
    return ( <li className="user">
    <p>Username: {props.user.username}</p>
    <p>Number of Games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
    </li>)
}

User.propTypes = {
    user: PropTypes.object.required,
    showGamesPlayed: PropTypes.bool.required,
}
export default User;