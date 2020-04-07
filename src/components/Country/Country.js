import React from 'react';
import { Row, Cell, Flag } from './styles';

const Country = ({ country, history }) => {
  const handleClick = () => {
    history.push(`/countries/${country.country}`);
  };
  return (
    <Row onClick={handleClick}>
      <Cell>
        {' '}
        <Flag src={country.countryInfo.flag} alt="flag" />
        <span>{country.country}</span>
      </Cell>
      <Cell>{country.cases}</Cell>
      <Cell>{country.deaths}</Cell>
      <Cell className="hide-sm">{country.tests}</Cell>
    </Row>
  );
};

export default Country;
