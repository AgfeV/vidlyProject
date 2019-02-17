import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props =>{

  const{itemsCount, pageSize, onPageChange, currentPage} = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  //Create an array
  const pages =  _.range(1,pagesCount+1);

  return (
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    {pages.map(page => (
      <li key = {page} class={ page === currentPage ? 'page-item active' : 'page-item'}>
        <a class="page-link" onClick = {() => onPageChange(page)} >{page} </a>
      </li>
    ))}

  </ul>
</nav>



  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};
export default Pagination;
