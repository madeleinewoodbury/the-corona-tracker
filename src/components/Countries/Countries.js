import React, { useEffect, useContext } from 'react';
import CoronaContext from '../../context/corona/coronaContext';
import Country from '../Country/Country';
import Background from '../layout/Background';
import Container from '../layout/Container';
import Spinner from '../layout/Spinner';
import { Wrapper, Table, Cell } from './styles';
import SortButtons from './SortButtons';

const Countries = ({ history }) => {
  const coronaContext = useContext(CoronaContext);
  const {
    getAllCountries,
    sortCountries,
    countries,
    loading,
    sortByKey,
    sortDirection,
  } = coronaContext;

  useEffect(() => {
    getAllCountries();
    // eslint-disable-next-line
  }, []);

  return !loading ? (
    <Background height="100%">
      <Container>
        <Wrapper>
          <Table>
            <thead>
              <tr>
                <Cell id="country-th">
                  Country{' '}
                  <SortButtons
                    sortBy="country"
                    sortByKey={sortByKey}
                    sortDirection={sortDirection}
                    sortCountries={sortCountries}
                  />
                </Cell>
                <Cell>
                  Cases{' '}
                  <SortButtons
                    sortBy="cases"
                    sortByKey={sortByKey}
                    sortDirection={sortDirection}
                    sortCountries={sortCountries}
                  />
                </Cell>
                <Cell>
                  Deaths{' '}
                  <SortButtons
                    sortBy="deaths"
                    sortByKey={sortByKey}
                    sortDirection={sortDirection}
                    sortCountries={sortCountries}
                  />
                </Cell>
                <Cell className="hide-sm">
                  Tested{' '}
                  <SortButtons
                    sortBy="tests"
                    sortByKey={sortByKey}
                    sortDirection={sortDirection}
                    sortCountries={sortCountries}
                  />
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
