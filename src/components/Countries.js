import React, { useEffect, useContext } from 'react';
import CoronaContext from '../context/corona/coronaContext';
import Country from './Country';

const Countries = () => {
  const coronaContext = useContext(CoronaContext);
  const { getAllCountries, countries, loading } = coronaContext;

  useEffect(() => {
    getAllCountries();
    // eslint-disable-next-line
  }, []);
  return (
    !loading && (
      <div className="countries">
        {countries &&
          countries.map((country) => (
            <Country key={country.country} country={country} />
          ))}
      </div>
    )
  );
};

export default Countries;
