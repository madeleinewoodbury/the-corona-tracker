import React, { useEffect, useContext } from 'react';
import CoronaContext from '../context/corona/coronaContext';

const CountryData = ({ match }) => {
  const coronaContext = useContext(CoronaContext);
  const { getCountryData, current, loading } = coronaContext;

  useEffect(() => {
    getCountryData(match.params.name);
    // eslint-disable-next-line
  }, []);

  return !loading && current !== null ? (
    <div className="country-data">
      <h1>{current.country}</h1>
      <div className="img-container" style={{ width: '400px' }}>
        <img src={current.countryInfo.flag} alt={`${current.country} flag`} />
      </div>
      <div>
        <p>
          <strong>Total Cases: </strong> {current.cases}
        </p>
        <p>
          <strong>Total Deaths: </strong> {current.deaths}
        </p>
        <p>
          <strong>Cases Today: </strong> {current.todayCases}
        </p>
        <p>
          <strong>Deaths Today: </strong> {current.todayDeaths}
        </p>
        <p>
          <strong>Recovered: </strong> {current.recovered}
        </p>
        <p>
          <strong>Tests: </strong> {current.tests}
        </p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CountryData;
