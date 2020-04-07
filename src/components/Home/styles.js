import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Landing = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const Totals = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  margin-bottom: 1rem;
`;

export const TotalsDiv = styled.div`
  padding: 1rem;
  margin: 1rem 2rem;
  background-color: var(--light-color);
  color: var(--dark-color);
  border-radius: 5px;
  font-size: 1.2rem;
`;

export const BtnLink = styled(Link)`
  display: inline-block;
  background: var(--primary-color);
  color: var(--light-color);
  padding: 0.4rem 1.3rem;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  outline: none;

  &:hover {
    background-color: rgb(201, 0, 0);
  }
`;
