import React from 'react';
import Like from "./common/like";

const MoviesTable = (props) => {
  const {movies,onDelete,onLike } = props;
  return (
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
          <Like liked={movie.liked} onClick={() => onLike(movie)}/>
        </td>
        <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm m-2">Delete</button></td>
      </tr>
    ))}
  </tbody>
</table>
      );
}

export default MoviesTable;
