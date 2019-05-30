import React, {Component} from 'react';
import Input from './common/input';

class LoginForm extends Component{

  //based on what we would get from a server or initalized with an empty string
  state = {
    account: {username: '', password: ''},
    //errors in its own state object
    errors:{

    }
  };

  // componentDidMount(){
  //   this.username.current.focus();
  // }
  validate = () =>{
    const errors = {};
    const {account} = this.state;
    if(account.username.trim() === '')
      errors.username = 'Username is required';
    if(account.password.trim() === '')
      errors.password = 'Password is required';

    return Object.keys(errors).length === 0 ? null : errors;
    }

  validateProperty = ({name, value}) => {
      if(name === 'username'){
        if(value.trim() === '') return 'Username is required';
      }
      if(name === 'password'){
        if(value.trim() === '') return 'Password is required';
      }

  }
  handleSubmit = e => {
    e.preventDefault();
    //grab the input and go ahead a validate the input
    const errors = this.validate();
    console.log(errors);
    this.setState({errors: errors || {}});
    //if there are errors return immeditly do not call the backend
    if(errors) return;

    //Else go ahead and call the backend

  };

  handleChange = ({currentTarget: input}) =>{
    //need to do validation on just the field not he entire form
    const errors = {...this.state.errors}
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account, errors});
  };


  render(){
    const {account, errors} = this.state;
    return(
      <div>
        <div className="container">
          <h1>Login Form</h1>
          <form onSubmit={this.handleSubmit}>
            <Input value={account.username}
              onChange={this.handleChange}
              name='username'
              label='Username'
              error={errors.username}
              />
            <Input
              value={account.password}
              onChange={this.handleChange}
              name='password'
              label='Password'
              error={errors.password}
              />
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
