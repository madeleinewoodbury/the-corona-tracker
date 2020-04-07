import React, { useEffect, useContext } from 'react';
import CoronaContext from '../../context/corona/coronaContext';
import { Wrapper, Title, ImgContainer, Info, InfoItem } from './styles';

const CountryData = ({ match }) => {
  const coronaContext = useContext(CoronaContext);
  const { getCountryData, current, loading } = coronaContext;

  useEffect(() => {
    getCountryData(match.params.name);
    // eslint-disable-next-line
  }, []);

  return !loading && current !== null ? (
    <Wrapper className="country-data">
      <Title>{current.country}</Title>
      <ImgContainer>
        <img src={current.countryInfo.flag} alt={`${current.country} flag`} />
      </ImgContainer>
      <Info>
        <InfoItem>
          <strong>Total Cases: </strong> {current.cases}
        </InfoItem>
        <InfoItem>
          <strong>Total Deaths: </strong> {current.deaths}
        </InfoItem>
        <InfoItem>
          <strong>Cases Today: </strong> {current.todayCases}
        </InfoItem>
        <InfoItem>
          <strong>Deaths Today: </strong> {current.todayDeaths}
        </InfoItem>
        <InfoItem>
          <strong>Recovered: </strong> {current.recovered}
        </InfoItem>
        <InfoItem>
          <strong>Tested: </strong> {current.tests}
        </InfoItem>
      </Info>
    </Wrapper>
  ) : (
    <p>Loading...</p>
  );
};

export default CountryData;
