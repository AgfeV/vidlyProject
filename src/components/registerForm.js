import React,{Component} from 'react';
import Input from './common/input';
import Joi from 'joi-browser/';
import Form from './common/form';

class RegisterForm extends Form {

  state={
    data:{
      username: '', password: '',name:''
    },
    errors:{

    }
  };

  schema = {
    username : Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name")
  };

  doSubmit = () =>{
    //Register specfic logic
  }
  render(){
    return(
      <div>
        <div className="container">
          <h1>Register Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput('username',"Username")}
            {this.renderInput('password',"Password","password")}
            {this.renderInput("name","Name")}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
