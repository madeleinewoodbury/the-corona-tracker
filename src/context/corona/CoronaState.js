import React, { useReducer } from 'react';
import CoronaContext from './coronaContext';
import CoronaReducer from './coronaReducer';

const CoronaState = (props) => {
  const initialState = {
    title: 'The Corona Tracker',
  };

  const [state, dispatch] = useReducer(CoronaReducer, initialState);

  // Get date

  return (
    <CoronaContext.Provider value={{ title: state.title }}>
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaState;
