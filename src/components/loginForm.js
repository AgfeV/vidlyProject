import React, {Component} from 'react';
import Input from './common/input';
//3rd Party valdation libary
import Joi from 'joi-browser/';
import Form from './common/form';


class LoginForm extends Form {

  //based on what we would get from a server or initalized with an empty string
  state = {
    data : {username: '', password: ''},
    //errors in its own state object
    errors:{

    }
  };

  schema = {
    username : Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
  };


  //what happens to the handle submit is specfic to this form
  //But the handlesubmit will be inherited by all forms
  doSubmit = () =>{
    //do form specfic logic for onSubmit
  };



  render(){

    return(
      <div>
        <div className="container">
          <h1>Login Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput('username',"Username")}
            {this.renderInput('password',"Password","password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
