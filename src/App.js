import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoronaState from './context/corona/CoronaState';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';
import CountryData from './components/CountryData/CountryData/CountryData';
import './App.css';

const App = () => {
  return (
    <CoronaState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/countries" component={Countries} />
            <Route exact path="/countries/:name" component={CountryData} />
          </Switch>
        </div>
      </Router>
    </CoronaState>
  );
};

export default App;
