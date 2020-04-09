import React, { useContext, useEffect } from 'react';
import numeral from 'numeral';
import CoronaContext from '../../context/corona/coronaContext';
import Background from '../layout/Background';
import Container from '../layout/Container';
import Spinner from '../layout/Spinner';
import { Landing, Title, Totals, TotalsDiv, BtnLink } from './styles';

const Home = () => {
  const coronaContext = useContext(CoronaContext);
  const { getTotal, total, loading } = coronaContext;

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line
  }, []);

  return !loading ? (
    <Background height="100vh">
      <Container>
        <Landing>
          <Title>The Corona Tracker</Title>
          {total !== null && (
            <Totals>
              <TotalsDiv>
                <strong>Total Cases: </strong>{' '}
                {numeral(total.cases).format('0,0')}
              </TotalsDiv>
              <TotalsDiv>
                <strong>Total Deaths: </strong>{' '}
                {numeral(total.deaths).format('0,0')}
              </TotalsDiv>
              <TotalsDiv>
                <strong>Cases Today: </strong>{' '}
                {numeral(total.todayCases).format('0,0')}
              </TotalsDiv>
              <TotalsDiv>
                <strong>Deaths Today: </strong>{' '}
                {numeral(total.todayDeaths).format('0,0')}
              </TotalsDiv>
              <TotalsDiv>
                <strong>Recovered: </strong>{' '}
                {numeral(total.recovered).format('0,0')}
              </TotalsDiv>
              <TotalsDiv>
                <strong>Tests: </strong> {numeral(total.tests).format('0,0')}
              </TotalsDiv>
            </Totals>
          )}
          <BtnLink to="/countries">View Countries</BtnLink>
        </Landing>
      </Container>
    </Background>
  ) : (
    <Spinner />
  );
};

export default Home;
