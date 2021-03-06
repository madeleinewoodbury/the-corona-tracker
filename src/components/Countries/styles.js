import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  color: white;
`;

export const Cell = styled.th`
  padding: 1rem;
  text-align: left;
  background: ${(props) => props.theme.colors.primaryColor};
  border-bottom: 3px solid ${(props) => props.theme.colors.backgroundColor};
  color: white;
  @media (max-width: 1024px) {
    padding: 0.75rem;
  }
  @media (max-width: 600px) {
    padding: 0.25 0.5rem;
  }
`;

export const SortIcon = styled('i')`
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
