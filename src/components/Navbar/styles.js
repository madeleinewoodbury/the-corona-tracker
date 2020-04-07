import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  border-bottom: 5px solid var(--primary-color);
  background-color: black;
  margin-bottom: 1rem;
`;

export const BrandLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  &:hover {
    color: red;
  }
`;

export const BrandImg = styled('img')`
  width: 60px;
`;

export const NavLink = styled(Link)`
  color: var(--light-color);
  padding: 0.45rem;
  margin: 0 0.25rem;
  font-size: 1.3rem;
  &:hover {
    color: red;
  }
`;
