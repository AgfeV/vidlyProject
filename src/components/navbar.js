import React, {Component} from 'react';
import {Link,NavLink} from "react-router-dom";
class NavBar extends Component {
  render () {

    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vidly</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink className="nav-item nav-link" to="/" >Movies</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-item nav-link" to="/customers" >Customers</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-item nav-link" to="/rentals" >Rentals</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  </div>
);

  }
}

export default NavBar;
