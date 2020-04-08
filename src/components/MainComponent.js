import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalContext from '../context/global/globalContext';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Countries from './Countries/Countries';
import CountryData from './CountryData/CountryData';

const MainComponent = () => {
  const globalContext = useContext(GlobalContext);
  const { isDark } = globalContext;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/countries" component={Countries} />
          <Route exact path="/countries/:name" component={CountryData} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default MainComponent;
