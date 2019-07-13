import React from 'react';

const Input = ({value,onChange,name, label,error,type}) =>{
  //if error is truthy then render the error via conditional rendering
  return(
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input autoFocus
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
        />
      {error &&  <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;
