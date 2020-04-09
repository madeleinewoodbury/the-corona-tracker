import React, { Fragment } from 'react';
import { SortIcon } from './styles';

const SortButtons = ({ sortBy, sortByKey, sortDirection, sortCountries }) => {
  const sortUp = () => {
    sortCountries({ sortBy, direction: 'up' });
  };

  const sortDown = () => {
    sortCountries({ sortBy, direction: 'down' });
  };

  return (
    <Fragment>
      <SortIcon
        onClick={sortUp}
        className={
          sortByKey === sortBy && sortDirection === 'up'
            ? 'fas fa-caret-up active'
            : 'fas fa-caret-up'
        }
      ></SortIcon>
      <SortIcon
        onClick={sortDown}
        className={
          sortByKey === sortBy && sortDirection === 'down'
            ? 'fas fa-caret-down active'
            : 'fas fa-caret-down'
        }
      ></SortIcon>
    </Fragment>
  );
};

export default SortButtons;
