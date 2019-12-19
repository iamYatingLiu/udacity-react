import React, { Component } from 'react';
import UserList from './UserList'

class MovieCard extends Component {
  render() {
    const { users,  usersWhoLikedMovie,movieInfo } = this.props;
    return (
      <div>
        <h2>{movieInfo.id}</h2>
        <p>Liked By:</p>
        <UserList users={users} usersWhoLikedMovie={usersWhoLikedMovie} />
      </div>
    );
  }
}

export default MovieCard;