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
      <div className="img-container">
        <img src={current.countryInfo.flag} alt={`${current.country} flag`} />
      </div>
      <div className="info">
        <div className="info-item">
          <strong>Total Cases: </strong> {current.cases}
        </div>
        <div className="info-item">
          <strong>Total Deaths: </strong> {current.deaths}
        </div>
        <div className="info-item">
          <strong>Cases Today: </strong> {current.todayCases}
        </div>
        <div className="info-item">
          <strong>Deaths Today: </strong> {current.todayDeaths}
        </div>
        <div className="info-item">
          <strong>Recovered: </strong> {current.recovered}
        </div>
        <div className="info-item">
          <strong>Tested: </strong> {current.tests}
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CountryData;
