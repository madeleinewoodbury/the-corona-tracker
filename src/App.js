import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoronaState from './context/corona/CoronaState';

import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

import Background from './components/layout/Background';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';
import CountryData from './components/CountryData/CountryData';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CoronaState>
        {/* <Background> */}
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/countries" component={Countries} />
            <Route exact path="/countries/:name" component={CountryData} />
          </Switch>
        </Router>
        {/* </Background> */}
      </CoronaState>
    </ThemeProvider>
  );
};

export default App;
