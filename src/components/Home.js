import React, { useContext } from 'react';
import CoronaContext from '../context/corona/coronaContext';

const Home = () => {
  const coronaContext = useContext(CoronaContext);
  const { title } = coronaContext;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Home;
