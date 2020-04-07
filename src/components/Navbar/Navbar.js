import React from 'react';
import { Nav, BrandLink, BrandImg, NavLink } from './styles';

const Navbar = () => {
  return (
    <Nav>
      <BrandLink to="/">
        <BrandImg
          src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/180/sars-cov-19.jpg"
          alt="covid-19 virus"
        />
        The Corona Tracker
      </BrandLink>
      <NavLink to="/countries">Countries</NavLink>
    </Nav>
  );
};

export default Navbar;
