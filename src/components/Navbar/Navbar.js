import React, { useContext } from 'react';
import GlobalContext from '../../context/global/globalContext';
import { Nav, BrandLink, BrandImg, NavLink } from './styles';

const Navbar = () => {
  const globalContext = useContext(GlobalContext);
  const { isDark, toggleTheme } = globalContext;
  const darkImg =
    'https://d2v9ipibika81v.cloudfront.net/uploads/sites/180/sars-cov-19.jpg';
  const lightImg =
    'https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg';

  const handleClick = (e) => toggleTheme();

  return (
    <Nav>
      <BrandLink to="/">
        <BrandImg src={isDark ? darkImg : lightImg} alt="covid-19 virus" />
        The Corona Tracker
      </BrandLink>
      <NavLink to="/countries">Countries</NavLink>
      <button onClick={handleClick}>
        {isDark ? 'Light Theme' : 'Dark Theme'}
      </button>
    </Nav>
  );
};

export default Navbar;
