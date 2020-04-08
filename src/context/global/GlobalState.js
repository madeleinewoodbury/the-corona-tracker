import React, { useReducer } from 'react';
import GlobalContext from './globalContext';
import GlobalReducer from './globalReducer';
import { TOGGLE_THEME } from '../types';

const GlobalState = (props) => {
  const initialState = {
    isDark: localStorage.getItem('isDark') || false,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // Set theme
  const toggleTheme = () => dispatch({ type: TOGGLE_THEME });

  return (
    <GlobalContext.Provider
      value={{
        isDark: state.isDark,
        toggleTheme,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
