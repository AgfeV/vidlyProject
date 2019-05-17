import React, {Component} from "react";
import Like from "./common/like";
import Pagination from "./common/pagination"
import NavBar from "./navbar"
import ListGroup from "./common/listGroup"

import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService"
import {paginate} from "../utils/paginate"

class Movies extends Component {
  state = {
    movies:[],
    genres:[],
    pageSize:4,
    currentPage: 1
  };

  //Really built for a server call/DB
  componentDidMount(){
    //in order to create a all generes button when first mounting go ahead and create a genres object
    const genres = [{name:'All Genres'}, ...getGenres()]
    this.setState({movies: getMovies(), genres});
  }
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

  handleGenreSelect = (genre) =>{
    //we want to reset the page back to one when switching because for new selected genre the that #of pages may not exist.
    this.setState({currentGenre: genre, currentPage:1 })
  }
  render() {
    const {pageSize , currentPage, movies:allMovies, currentGenre} = this.state;

    //Filter out the movies by the selected genere
    const filtered = currentGenre && currentGenre._id
     ? allMovies.filter(m => m.genre._id === currentGenre._id) : allMovies;
    const movies = paginate(filtered, currentPage, pageSize )
    //Note: By using the this.state.movies.map we create a new row in the table and then access that specfic set of data.
    //The onclick will call the handle delete function with the current movie title to be deleted
    return(
      <div className = "row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem = {this.state.currentGenre}
            onItemSelect={this.handleGenreSelect}
            />
        </div>


        <div className="col">
          <div>There are {filtered.length} available</div>

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
        {movies.map(movie => (
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
        itemsCount={filtered.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={this.handlePageChange}
        />
    </div>
</div>
);
  }
}
export default Movies;
