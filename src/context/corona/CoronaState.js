import React, { useReducer } from 'react';
import axios from 'axios';
import CoronaContext from './coronaContext';
import CoronaReducer from './coronaReducer';
import config from '../config';
import { GET_DATA, DATA_ERROR } from '../types';

const CoronaState = (props) => {
  const initialState = {
    title: 'The Corona Tracker',
    data: null,
  };

  const [state, dispatch] = useReducer(CoronaReducer, initialState);

  // Get Country Data By Name
  const getCountryData = async (country) => {
    try {
      const res = await axios.get(
        `https://covid-19-data.p.rapidapi.com/country?format=undefined&name=${country}`,
        config
      );

      dispatch({
        type: GET_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: DATA_ERROR,
      });
    }
  };

  return (
    <CoronaContext.Provider value={{ title: state.title, getCountryData }}>
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaState;
