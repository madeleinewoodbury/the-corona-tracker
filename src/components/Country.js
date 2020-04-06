import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country: { code, name } }) => {
  return (
    <div className="country">
      <Link to={`/${name}/${code}`} className="country-link">
        <img
          src={`https://www.countryflags.io/${code}/flat/64.png`}
          alt={`${name} flag`}
        ></img>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default Country;
