import React, { Component } from 'react';
import MovieCard from './MovieCard';

class Dashboard extends Component {
    render() {
      const { movies, usersByMovie, users } = this.props;
      const MovieCards = Object.keys(movies).map(id => (
        <MovieCard
        key = {id}
        users = {users}
        usersWhoLikedMovie ={usersByMovie[id]}
        movieInfo = {movies[id]}
        />
      ));
     
      return <ul>{MovieCards}</ul>;
    }
  }
  
  export default Dashboard;