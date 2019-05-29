import React, {Component} from "react";

import Like from "./common/like";
import MoviesTable from './moviesTable';
import Pagination from "./common/pagination";
import NavBar from "./navbar";
import ListGroup from "./common/listGroup";

import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import {paginate} from "../utils/paginate";
import _ from 'lodash';
class Movies extends Component {
  state = {
    movies:[],
    genres:[],
    pageSize:4,
    currentPage: 1,
    sortColumn:{path:'title',order:'asc'}
  };

  //Really built for a server call/DB
  componentDidMount(){
    //in order to create a all generes button when first mounting go ahead and create a genres object
    const genres = [{_id:'' , name:'All Genres'}, ...getGenres()]
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
  handleSort = sortColumn =>{
    //the movies table class will handle all the sorting logic
    //are job is to make sure the sortCol gets send through props and the state gets updated with
    //this handler
    this.setState({sortColumn});
  }

  getPagedData = () =>
  {
    const {pageSize , currentPage, movies:allMovies, currentGenre , sortColumn} = this.state;
    //Filter out the movies by the selected genere
    const filtered = currentGenre && currentGenre._id
     ? allMovies.filter(m => m.genre._id === currentGenre._id) : allMovies;

     //Now we sort the data
    const sorted = _.orderBy(filtered,[sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize )

    return {totalCount: filtered.length , data:movies};

  }

  render() {
    const {pageSize , currentPage, movies:allMovies, currentGenre , sortColumn} = this.state;

    const {totalCount , data:movies} = this.getPagedData();
    //Note: By using the this.state.movies.map we create a new row in the table and then access that specfic set of data.
    //The onclick will call the handle delete function with the current movie title to be deleted

    return(
      <React.Fragment>
        <div className ="container">
        <div className = "row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              selectedItem = {this.state.currentGenre}
              onItemSelect={this.handleGenreSelect}
              />
          </div>
          <div className="col">
            <div>There are {totalCount} available</div>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLiked}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              />
          </div>

        </div>
      </div>
      </React.Fragment>

);
  }
}
export default Movies;
