import React, { useEffect, useContext, useState } from 'react';
import CoronaContext from '../../context/corona/coronaContext';
import Country from '../Country/Country';
import Background from '../layout/Background';
import Container from '../layout/Container';
import Spinner from '../layout/Spinner';
import { Wrapper, Table, Cell, SortIcon } from './styles';

const Countries = ({ history }) => {
  const coronaContext = useContext(CoronaContext);
  const { getAllCountries, sortByCountry, countries, loading } = coronaContext;
  const [sort, setSort] = useState('cases');

  useEffect(() => {
    getAllCountries();
    // eslint-disable-next-line
  }, []);

  const handleSort = (sort) => {
    setSort(sort);
  };

  const activeClass = 'fas fa-sort-down active';
  const classes = 'fas fa-sort-down';

  return !loading ? (
    <Background height="100%">
      <Container>
        <Wrapper>
          <Table>
            <thead>
              <tr>
                <Cell>
                  Country{' '}
                  <SortIcon
                    onClick={(e) => handleSort('country')}
                    className={sort === 'country' ? activeClass : classes}
                  ></SortIcon>
                </Cell>
                <Cell>
                  Cases{' '}
                  <SortIcon
                    onClick={(e) => handleSort('cases')}
                    className={sort === 'cases' ? activeClass : classes}
                  ></SortIcon>
                </Cell>
                <Cell>
                  Deaths{' '}
                  <SortIcon
                    onClick={(e) => handleSort('deaths')}
                    className={sort === 'deaths' ? activeClass : classes}
                  ></SortIcon>
                </Cell>
                <Cell className="hide-sm">
                  Tested{' '}
                  <SortIcon
                    onClick={(e) => handleSort('tests')}
                    className={sort === 'tests' ? activeClass : classes}
                  ></SortIcon>
                </Cell>
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
          </Table>
        </Wrapper>
      </Container>
    </Background>
  ) : (
    <Spinner />
  );
};

export default Countries;
