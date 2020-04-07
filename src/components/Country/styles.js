import styled from 'styled-components';

export const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

export const Cell = styled.td`
  padding: 1rem;
  text-align: left;
  color: white;
  cursor: pointer;
  &:first-of-type {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1024px) {
    padding: 0.75rem;
  }
`;

export const Flag = styled.img`
  width: 60px;
  margin-right: 1rem;
  @media (max-width: 1024px) {
    width: 30px;
    margin-right: 1rem;
  }
`;
