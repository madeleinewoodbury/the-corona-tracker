import React, { useContext, useEffect } from 'react';
import CoronaContext from '../context/corona/coronaContext';
import { countriesData } from '../countriesData';
import Countries from './Countries';

const Home = () => {
  const coronaContext = useContext(CoronaContext);
  const { getTotal, total, loading } = coronaContext;

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line
  }, []);

  return (
    !loading && (
      <div>
        <h1>The Corona Tracker</h1>
        {total !== null && (
          <div>
            <p>
              <strong>Total Cases: </strong> {total.cases}
            </p>
            <p>
              <strong>Total Deaths: </strong> {total.deaths}
            </p>
            <p>
              <strong>Cases Today: </strong> {total.todayCases}
            </p>
            <p>
              <strong>Deaths Today: </strong> {total.todayDeaths}
            </p>
            <p>
              <strong>Recovered: </strong> {total.recovered}
            </p>
            <p>
              <strong>Tests: </strong> {total.tests}
            </p>
            <p>
              <strong>Countries Affected: </strong> {total.affectedCountries}
            </p>
          </div>
        )}
      </div>
    )
  );
};

export default Home;
