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
  renderSortIcon = column =>{
    const {sortColumn} = this.props;
    if(column.path !== sortColumn.path) return null;

    if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  }
  render(){

    const { columns} = this.props;

      return(<thead>
      <tr>
        {columns.map(column => <th className="clickable" key={column.path || column.key} onClick={() => this.raiseSort(column.path)}> {column.label} {this.renderSortIcon(column)}</th>)}
      </tr>
      </thead>
  )
}
}
export default TableHeader;
