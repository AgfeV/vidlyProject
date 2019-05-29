import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies'
import NavBar from "./components/navbar";
import {Route,Switch,Redirect} from "react-router-dom";
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className ="content">
          <Switch>
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="not-found" component={NotFound}/>
            <Route path="/" exact component={Movies}/>
            <Redirect to="/not-found"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
