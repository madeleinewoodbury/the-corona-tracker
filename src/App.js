import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoronaState from './context/corona/CoronaState';
import GlobalState from './context/global/GlobalState';
// import { ThemeProvider } from 'styled-components';
// import lightTheme from './themes/lightTheme';
// import darkTheme from './themes/darkTheme';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import Countries from './components/Countries/Countries';
// import CountryData from './components/CountryData/CountryData';
import MainComponent from './components/MainComponent';
import './App.css';

const App = () => {
  return (
    <GlobalState>
      <CoronaState>
        <MainComponent />
      </CoronaState>
    </GlobalState>
  );
};

export default App;
