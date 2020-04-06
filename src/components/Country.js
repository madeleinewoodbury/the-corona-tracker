import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
  return (
    <div className="country">
      <Link to={`/countries/${country.country}`} className="country-link">
        <img src={country.countryInfo.flag} alt="flag" />
        <span>{country.country}</span>
      </Link>
    </div>
  );
};

export default Country;
