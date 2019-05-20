import React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({sortColumn, columns , onSort, data}) => {
  return(
    <table class="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
        />

      <TableBody
        data={data}
        columns={columns}
        />
    </table>
  );
}

export default Table;
