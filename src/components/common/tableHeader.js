import React, {Component} from 'react';

//Passing through props sort
//columns : array
// onSort: function
//sortColumn: object
class TableHeader extends Component {
  //restructure the table header with the attrabute labels
  //First move the sorting method from movieTable to hear to be dynamicly created
  raiseSort = path =>{
    //will take all the sorting logic
    const sortColumn = {...this.props.sortColumn};

    if(sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc': 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    //now we need to send the new sort colum objcet back to the handler in movies
    this.props.onSort(sortColumn);
  };

  render(){

    const {onSort, columns, sortColumn, onClick} = this.props;

      return(<thead>
      <tr>
        {this.props.columns.map(column => <th key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>{column.label}</th>)}
      </tr>
      </thead>
  )
}
}
export default TableHeader;
