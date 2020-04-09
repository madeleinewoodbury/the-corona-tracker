import React, { useContext } from 'react';
import GlobalContext from '../../context/global/globalContext';
import { Nav, BrandImg, NavLink } from './styles';

const Navbar = () => {
  const globalContext = useContext(GlobalContext);
  const { isDark, toggleTheme } = globalContext;
  const darkImg =
    'https://d2v9ipibika81v.cloudfront.net/uploads/sites/180/sars-cov-19.jpg';
  const lightImg =
    'https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg';

  const iconStyles = {
    color: isDark ? 'yellow' : '#333333',
    backgroundColor: isDark ? '#333333' : '#e8e5e5',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.2rem',
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '1rem',
  };

  const handleClick = (e) => toggleTheme();

  return (
    <Nav>
      <BrandImg src={isDark ? darkImg : lightImg} alt="covid-19 virus" />
      <NavLink to="/">Totals</NavLink>
      <NavLink to="/countries">Countries</NavLink>
      <i onClick={handleClick} className="fas fa-moon" style={iconStyles}></i>
    </Nav>
  );
};

export default Navbar;
