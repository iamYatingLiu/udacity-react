import React, { Component } from 'react';
import UserList from './UserList'

class MovieCard extends Component {
    render() {
      return (
        <div>
            <h2>{this.props.movie.name}</h2>
            <p>Liked By:</p>
            <UserList users={this.props.users}/>
        </div>
      );
    }
  }
  
  export default MovieCard;