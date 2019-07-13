import React,{Component} from 'react';
import Input from './common/input';
//3rd Party valdation libary
import Joi from 'joi-browser/';
import Form from './common/form';

class MovieForm extends Form{
  //<button className="btn btn-primary" onClick={() => history.push('/movies') }>Save</button>
  //based on what we would get from a server or initalized with an empty string
  state = {
    data : {title: '', genre: '', numberInStock:'', rate:'' },
    //errors in its own state object
    errors:{

    }
  };

  schema = {
    title : Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock:Joi.number().required().min(0).max(100)  ,//Between 0 and 100
    rate: Joi.number().required().min(0).max(10)  //Between 0 and 10
  };
  render(){
    const{match,history}= this.props;
    return(

      <div>
        <div classname="container">
          <h1>MovieForm {match.params.id}</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput('title',"Title")}
            {this.renderInput('genre',"Genre")}
            {this.renderInput('numberInStock',"Stock")}
            {this.renderInput('rate',"Rate")}
            {this.renderButton("Save")}
          </form>
        </div>
      </div>
    );
  }

}
export default MovieForm;
