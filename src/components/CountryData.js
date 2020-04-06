import React, { useEffect, useContext } from 'react';
import CoronaContext from '../context/corona/coronaContext';

const CountryData = ({ match }) => {
  const coronaContext = useContext(CoronaContext);
  const { getCountryData, country, loading } = coronaContext;

  useEffect(() => {
    getCountryData(match.params.name);
    // eslint-disable-next-line
  }, []);

  return !loading && country !== null ? (
    <div className="country-data">
      <h1>{country[0].country}</h1>
      <img
        src={`https://www.countryflags.io/${match.params.code}/flat/64.png`}
        alt={`${match.params.name} flag`}
      />
      <div>
        <p>
          <strong>Confirmed: </strong> {country[0].confirmed}
        </p>
        <p>
          <strong>Critical: </strong> {country[0].critical}
        </p>
        <p>
          <strong>Recovered: </strong> {country[0].recovered}
        </p>
        <p>
          <strong>Deaths: </strong> {country[0].deaths}
        </p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CountryData;
