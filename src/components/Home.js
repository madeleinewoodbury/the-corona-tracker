import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoronaContext from '../context/corona/coronaContext';

const Home = () => {
  const coronaContext = useContext(CoronaContext);
  const { getTotal, total, loading } = coronaContext;

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line
  }, []);

  return (
    !loading && (
      <div className="landing">
        <h1>The Corona Tracker</h1>
        {total !== null && (
          <div className="totals">
            <div>
              <strong>Total Cases: </strong> {total.cases}
            </div>
            <div>
              <strong>Total Deaths: </strong> {total.deaths}
            </div>
            <div>
              <strong>Cases Today: </strong> {total.todayCases}
            </div>
            <div>
              <strong>Deaths Today: </strong> {total.todayDeaths}
            </div>
            <div>
              <strong>Recovered: </strong> {total.recovered}
            </div>
            <div>
              <strong>Tests: </strong> {total.tests}
            </div>
          </div>
        )}
        <Link to="/countries" className="btn">
          View Countries
        </Link>
      </div>
    )
  );
};

export default Home;
