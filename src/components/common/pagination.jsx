import React from 'react';
import _ from 'lodash';
import { paginate } from '../../utils/paginate';

const Pagination = ({
  pageSize,
  itemsCount,
  onPageChange,
  currentPage,
  itermsCountPerPage
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  const pagesRange = paginate(pages, currentPage, itermsCountPerPage);

  return (
    <div className="container">
      <nav>
        <ul className="pagination">
          {pagesRange.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
