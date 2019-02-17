import React from 'react';

//Creating funcitonal component
const ListGroup = (props) => {
  const {items, textProperty, valueProperty} = props;
    return(
      <ul class="list-group">
      {items.map(item=> <li
        className= "list-group-item"
        key = {item[valueProperty]}

        >{item[textProperty]}</li>)}
      </ul>
  );
}

ListGroup.defaultProps ={
  textProperty: "name",
  valueProperty: "_id"
}
export default ListGroup;
