import React, {Component} from 'react';
import _ from 'lodash';

class TableBody extends Component {

  renderCell = (item,column) => {
    //if you have a content then send it the item and the function will return the react fragment
    if(column.content) return column.content(item);
    //else go ahead and return the item and the path
    return _.get(item, column.path);
  }

  createKey = (item, column) =>{
    return item._id + (column.path || column.key);
  }
  render(){
    const {data, columns} = this.props;

    return(
      <tbody>
        {
          data.map(item => (<tr key={item._id}>
            {columns.map(column => <td key={this.createKey(item,column)}> {this.renderCell(item,column)}</td>)}
          </tr>))
        }
      </tbody>
    );
  }
}

export default TableBody;
