import React from 'react';
import Country from './Country';
import countries from '../countries';

const Countries = () => {
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.code} country={country} />
      ))}
    </div>
  );
};

export default Countries;
