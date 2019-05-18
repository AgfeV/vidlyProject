import React, {Component} from 'react';
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
//we are going to create an object to send down to the table header class with all the path and lable information
columns = [

  {path:'title', label: 'Title'},
  {path:'genre.name', label: 'Genre'},
  {path:'numberInStock', label: 'Stock'},
  {path:'dailyRentalRate', label: 'Rate'},
  //will represent the like and the delete button but dont have a label or path for sorting
  {key:'like'},
  {key:'delete'}

]

  render() {
    const {movies,onDelete,onLike, sortColumn, onSort} = this.props;
    return (
      <table class="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
          />

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
