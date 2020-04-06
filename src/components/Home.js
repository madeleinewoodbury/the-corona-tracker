import React, { useContext, useEffect } from 'react';
import CoronaContext from '../context/corona/coronaContext';
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
              <strong>Confirmed: </strong> {total.confirmed}
            </p>
            <p>
              <strong>Critical: </strong> {total.critical}
            </p>
            <p>
              <strong>Recovered: </strong> {total.recovered}
            </p>
            <p>
              <strong>Deaths: </strong> {total.deaths}
            </p>
          </div>
        )}
        <Countries />
      </div>
    )
  );
};

export default Home;
