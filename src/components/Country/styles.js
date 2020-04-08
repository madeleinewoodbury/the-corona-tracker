import styled from 'styled-components';

export const Row = styled.tr`
  color: ${(props) => props.theme.colors.textColor};
  &:nth-of-type(even) {
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryColor};
    color: #ffffff;
  }
`;

export const Cell = styled.td`
  padding: 1rem;
  text-align: left;
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
