import React, {Component} from "react";
import Like from "./common/like";
import Pagination from "./common/pagination"
import NavBar from "./navbar"
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies:getMovies(),
    pageSize:4,
    currentPage: 1
  };

  //take the current movie title, movie and filter out the movie in a new
  //movies object that will be the updated state
  handleDelete = movie => {
    //Could change to the id instead of the title since it is unique
    const movies = this.state.movies.filter(c =>c.title !== movie);
    this.setState({movies})
    console.log('Event Handler Delete Called', movie)
  };

  handleLiked = movie => {
    const movies =  [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});

  }
  handlePageChange = page => {
    //Update the state
    this.setState({currentPage:page})
  }

  render() {
const {pageSize , currentPage} = this.state;
    //Note: By using the this.state.movies.map we create a new row in the table and then access that specfic set of data.
    //The onclick will call the handle delete function with the current movie title to be deleted
    return(
      <React.Fragment>
        <NavBar/>
      <div>
        There are {this.state.movies.length} available
      </div>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Genre</th>
        <th scope="col">Action</th>
        <th scope="col">Rate</th>
        <th scope="col">Heart</th>
      </tr>
    </thead>
    <tbody>
    {this.state.movies.map(movie => (
      <tr key={movie._id} >
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like liked={movie.liked} onClick={() => this.handleLiked(movie)}/>
        </td>
        <td><button onClick={() => this.handleDelete(movie.title)} className="btn btn-danger btn-sm m-2">Delete</button></td>
      </tr>
    ))}
    </tbody>
  </table>
  <Pagination
    itemsCount={this.state.movies.length}
    pageSize={pageSize}
    currentPage={currentPage}
    onPageChange={this.handlePageChange}
    />
  </React.Fragment>
);
  }
}
export default Movies;
