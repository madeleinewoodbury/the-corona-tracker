import React from 'react';

const Country = ({ country: { code, name } }) => {
  return (
    <div>
      <img src={`https://www.countryflags.io/${code}/flat/64.png`}></img>
      <h2>{name}</h2>
    </div>
  );
};

export default Country;
