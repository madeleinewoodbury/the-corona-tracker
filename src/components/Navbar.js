import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img
          src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/180/sars-cov-19.jpg"
          alt="covid-19 virus"
        />
        The Corona Tracker
      </Link>
      <Link to="/countries">Countries</Link>
    </nav>
  );
};

export default Navbar;
