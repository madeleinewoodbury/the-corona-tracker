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
  background: ${(props) => props.theme.colors.background};
`;

export const BrandLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.textColor};
  &:hover {
    color: red;
  }
`;

export const BrandImg = styled('img')`
  width: 60px;
  margin-right: 1rem;
`;

export const NavLink = styled(Link)`
  padding: 0.45rem;
  margin: 0 0.25rem;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.textColor};
  &:hover {
    color: red;
  }
`;
