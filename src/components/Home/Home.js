import React, { useContext, useEffect } from 'react';
import CoronaContext from '../../context/corona/coronaContext';
import Background from '../layout/Background';
import Container from '../layout/Container';
import { Landing, Title, Totals, TotalsDiv, BtnLink } from './styles';

const Home = () => {
  const coronaContext = useContext(CoronaContext);
  const { getTotal, total, loading } = coronaContext;

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line
  }, []);

  return (
    !loading && (
      <Background height="100vh">
        <Container>
          <Landing>
            <Title>The Corona Tracker</Title>
            {total !== null && (
              <Totals>
                <TotalsDiv>
                  <strong>Total Cases: </strong> {total.cases}
                </TotalsDiv>
                <TotalsDiv>
                  <strong>Total Deaths: </strong> {total.deaths}
                </TotalsDiv>
                <TotalsDiv>
                  <strong>Cases Today: </strong> {total.todayCases}
                </TotalsDiv>
                <TotalsDiv>
                  <strong>Deaths Today: </strong> {total.todayDeaths}
                </TotalsDiv>
                <TotalsDiv>
                  <strong>Recovered: </strong> {total.recovered}
                </TotalsDiv>
                <TotalsDiv>
                  <strong>Tests: </strong> {total.tests}
                </TotalsDiv>
              </Totals>
            )}
            <BtnLink to="/countries">View Countries</BtnLink>
          </Landing>
        </Container>
      </Background>
    )
  );
};

export default Home;
