import React, { useContext, useEffect } from 'react';
import CoronaContext from '../context/corona/coronaContext';

const Home = () => {
  const coronaContext = useContext(CoronaContext);
  const { title, getCountryData } = coronaContext;

  useEffect(() => {
    getCountryData('sweden');
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Home;
