import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoronaState from './context/corona/CoronaState';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Countries from './components/Countries';
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
          </Switch>
        </div>
      </Router>
    </CoronaState>
  );
};

export default App;
