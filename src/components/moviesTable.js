import React, {Component} from 'react';
import Like from "./common/like";


class MoviesTable extends Component {
  raiseSort = path =>{
    //will take all the sorting logic
    const sortColumn = {...this.props.sortColumn};

    if(sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc': 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    //now we need to send the new sort colum objcet back to the handler in movies
    this.props.onSort(sortColumn);
  }

  render() {
    const {movies,onDelete,onLike} = this.props;
    return (
      <table class="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort('title')} scope="col">Title</th>
            <th onClick={() => this.raiseSort('genre.name')} scope="col">Genre</th>
            <th onClick={() => this.raiseSort('numberInStock')} scope="col">Action</th>
            <th onClick={() => this.raiseSort('dailyRentalRate') } scope="col">Rate</th>
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
                <Like liked={movie.liked} onClick={() => onLike(movie)}/>
              </td>
              <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm m-2">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );}
}
export default MoviesTable;
