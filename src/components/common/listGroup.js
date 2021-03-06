import React from 'react';

//Creating funcitonal component
const ListGroup = ({items, textProperty, valueProperty, onItemSelect, selectedItem}) => {
    return(
      <ul class="list-group">
      {items.map(item=> <li
        onClick = {() => onItemSelect(item)}
        className= {selectedItem === item ? "list-group-item active" : "list-group-item"}
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
