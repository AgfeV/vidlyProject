import React, {Component} from 'react';
import Like from "./common/like";
import Table from "./common/table"
class MoviesTable extends Component {
//we are going to create an object to send down to the table header class with all the path and lable information
columns = [

  {path:'title', label: 'Title'},
  {path:'genre.name', label: 'Genre'},
  {path:'numberInStock', label: 'Stock'},
  {path:'dailyRentalRate', label: 'Rate'},
  //will represent the like and the delete button but dont have a label or path for sorting
  //will pass the function by refrence with onlike and onDelete taht will take a movie and return a react fragment.
  {key:'like', content:  movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>},
  {key:'delete', content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm m-2">Delete</button> }

]

  render() {
    const {movies, sortColumn, onSort} = this.props;
    return (
      <Table columns = {this.columns} data={movies} onSort={onSort} sortColumn={sortColumn}/>
    );}
}
export default MoviesTable;
