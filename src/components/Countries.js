import React from 'react';
import { countriesData } from '../countriesData';
import Country from './Country';

const Countries = () => {
  return (
    <div className="countries">
      {countriesData.map((country) => (
        <Country key={country.code} country={country} />
      ))}
    </div>
  );
};

export default Countries;
