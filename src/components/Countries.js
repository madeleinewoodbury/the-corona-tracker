import React, { useEffect, useContext } from 'react';
import CoronaContext from '../context/corona/coronaContext';
import Country from './Country';

const Countries = ({ history }) => {
  const coronaContext = useContext(CoronaContext);
  const { getAllCountries, countries, total, loading } = coronaContext;

  useEffect(() => {
    getAllCountries();
    // eslint-disable-next-line
  }, []);
  return (
    !loading && (
      <div className="countries">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th className="hide-sm">Tested</th>
            </tr>
          </thead>
          <tbody>
            {countries &&
              countries.map((country) => (
                <Country
                  key={country.country}
                  country={country}
                  history={history}
                />
              ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Countries;
