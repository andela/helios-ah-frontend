import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';


const Paginate = (props) => {
  const {
    activePage,
    handlePageChange,
    itemsPerPage,
    totalItems
  } = props;

  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={itemsPerPage}
      totalItemsCount={totalItems}
      pageRangeDisplayed={3}
      onChange={handlePageChange}
      itemClass="pagination-item"
      linkClass="pagination-link"
    />
  );
};


Paginate.propTypes = {
  activePage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};


export default Paginate;
