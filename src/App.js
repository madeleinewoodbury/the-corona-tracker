import React from 'react';
import CoronaState from './context/corona/CoronaState';
import GlobalState from './context/global/GlobalState';
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
