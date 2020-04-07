import React, { useEffect, useContext } from 'react';
import CoronaContext from '../../context/corona/coronaContext';
import Country from '../Country/Country';
import Background from '../layout/Background';
import Container from '../layout/Container';
import { Wrapper, Table, Cell, SortIcon } from './styles';

const Countries = ({ history }) => {
  const coronaContext = useContext(CoronaContext);
  const { getAllCountries, countries, loading } = coronaContext;

  useEffect(() => {
    getAllCountries();
    // eslint-disable-next-line
  }, []);
  return (
    !loading && (
      <Background height="100%">
        <Container>
          <Wrapper>
            <Table>
              <thead>
                <tr>
                  <Cell>
                    Country <SortIcon className="fas fa-sort-down"></SortIcon>
                  </Cell>
                  <Cell>Cases</Cell>
                  <Cell>Deaths</Cell>
                  <Cell className="hide-sm">Tested</Cell>
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
    )
  );
};

export default Countries;
