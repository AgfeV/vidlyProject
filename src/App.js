import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies'
import NavBar from "./components/navbar";
import {Route,Switch,Redirect} from "react-router-dom";
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieform';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className ="content">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="not-found" component={NotFound}/>
            <Redirect to="/not-found"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
