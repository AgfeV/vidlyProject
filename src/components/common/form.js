//Take the reuable pieces of the form and create a seperate components
//That the all the login forms will inherit from

import React, {Component} from 'react';
import Joi from 'joi-browser/';
import Input from './input';
class Form extends Component{

  //all forms will inherit a state object that must include
  state = {
    data:{},
    errors:{}
  };

  validate = () =>{
    //first run the joi validation and place the result into an object to retrive the errorMessage
    const result = Joi.validate(this.state.data, this.schema,{abortEarly:false});
    //if the result object is empty then we want to go ahead and return null
    if(!result.error) return null;
    //if we have errors then continue and start printing the diffrent errors to the user
    //First create an new object to map all the errors collected.
    const errors = {};

    //mapp all messages to the errors array
    for(let item of result.error.details)
        errors[item.path[0]] = item.message;

    return errors;
  };
  validateProperty = ({name, value}) => {
    //create a new object to dynamically to retreave the name and then schema to validate
    const obj = {[name]:value};
    //based on the name we need to give a single schema
    const schema = {[name]: this.schema[name]};
    const { error } = Joi.validate(obj,schema);

    if(!error) return null;
    //only display the firt error to pop and its message for the user
    return error.details[0].message;
  };

  handleSubmit = e => {
    e.preventDefault();
    //grab the input and go ahead a validate the input
    const errors = this.validate();
    console.log(errors);
    this.setState({errors: errors || {}});
    //if there are errors return immeditly do not call the backend
    if(errors) return;

    //Go ahead and call the backend logic that is form specfic
    this.doSubmit()

  };

    //I feel like handle change is done with all forms
    handleChange = ({currentTarget: input}) =>{
      //need to do validation on just the field not he entire form
      const errors = {...this.state.errors};
      const errorMessage = this.validateProperty(input);
      if(errorMessage) errors[input.name] = errorMessage;
      else delete errors[input.name];

      const data = {...this.state.data};
      data[input.name] = input.value;
      this.setState({data, errors});
    };

    renderButton(label){
      return   <button
          disabled = {this.validate()}
          className="btn btn-primary">{label}</button>
      };

    renderInput(name,label,type = "text"){
      const {data, errors} = this.state;
        return(<Input
          type={type}
          value={data[name]}
          onChange={this.handleChange}
          name={name}
          label={label}
          error={errors[name]}
          />);
      };
}

export default Form;
