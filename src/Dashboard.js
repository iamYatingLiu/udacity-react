import React, { Component } from 'react';
import MovieCard from './MovieCard';

class Dashboard extends Component {
    render() {
      const movieslist = this.props.movies;
      const profileslist = this.props.profiles;
      var userslist = this.props.users;
      return (
        <div>
          <ul>
            {Object.keys(movieslist).map((movieid) => 
            {
              var usersID = profileslist.filter((profile) => profile.favoriteMovieID === movieid).map(profile => profile.userID);
              var users = Object.keys(userslist).reduce(function(r, e) {
                if (usersID.includes(e)) r[e] = userslist[e]
                return r;
              }, {})

              return <li><MovieCard movie={movieslist[movieid]} users ={users}/></li>
            }
            )}
          </ul>
        </div>
      );
    }
  }
  
  export default Dashboard;