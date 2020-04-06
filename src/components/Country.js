import React from 'react';

const Country = ({ country, history }) => {
  const handleClick = () => {
    history.push(`/countries/${country.country}`);
  };
  return (
    <tr onClick={handleClick}>
      <td>
        {' '}
        <img src={country.countryInfo.flag} alt="flag" />
        <span>{country.country}</span>
      </td>
      <td>{country.cases}</td>
      <td>{country.deaths}</td>
      <td className="hide-sm">{country.tests}</td>
    </tr>
  );
};

export default Country;
