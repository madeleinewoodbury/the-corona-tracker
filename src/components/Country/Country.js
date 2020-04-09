import React from 'react';
import numeral from 'numeral';
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
      <Cell>{numeral(country.cases).format('0,0')}</Cell>
      <Cell>{numeral(country.deaths).format('0,0')}</Cell>
      <Cell className="hide-sm">{numeral(country.tests).format('0,0')}</Cell>
    </Row>
  );
};

export default Country;
