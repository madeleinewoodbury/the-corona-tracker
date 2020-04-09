import React, { useEffect, useContext } from 'react';
import numeral from 'numeral';
import CoronaContext from '../../context/corona/coronaContext';
import Background from '../layout/Background';
import Container from '../layout/Container';
import Spinner from '../layout/Spinner';
import { Wrapper, Title, Flag, Info, InfoItem } from './styles';

const CountryData = ({ match }) => {
  const coronaContext = useContext(CoronaContext);
  const { getCountryData, current, loading } = coronaContext;

  useEffect(() => {
    getCountryData(match.params.name);
    // eslint-disable-next-line
  }, []);

  return !loading && current !== null ? (
    <Background height={window.innerWidth < 600 ? '100%' : '100vh'}>
      <Container>
        <Wrapper className="country-data">
          <Title>{current.country}</Title>
          <Flag
            src={current.countryInfo.flag}
            alt={`${current.country} flag`}
            className="flag-sm"
          />
          <Info>
            <InfoItem>
              <strong>Total Cases: </strong>{' '}
              {numeral(current.cases).format('0,0')}
            </InfoItem>
            <InfoItem>
              <strong>Total Deaths: </strong>{' '}
              {numeral(current.deaths).format('0,0')}
            </InfoItem>
            <InfoItem>
              <strong>Cases Today: </strong>{' '}
              {numeral(current.todayCases).format('0,0')}
            </InfoItem>
            <InfoItem>
              <strong>Deaths Today: </strong>{' '}
              {numeral(current.todayDeaths).format('0,0')}
            </InfoItem>
            <InfoItem>
              <strong>Recovered: </strong>{' '}
              {numeral(current.recovered).format('0,0')}
            </InfoItem>
            <InfoItem>
              <strong>Tested: </strong> {numeral(current.tests).format('0,0')}
            </InfoItem>
          </Info>
        </Wrapper>
      </Container>
    </Background>
  ) : (
    <Spinner />
  );
};

export default CountryData;
