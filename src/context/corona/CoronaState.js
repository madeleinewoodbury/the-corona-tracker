import React, { useReducer } from 'react';
import axios from 'axios';
import CoronaContext from './coronaContext';
import CoronaReducer from './coronaReducer';
import config from '../config';
import { GET_TOTAL, GET_COUNTRY, DATA_ERROR } from '../types';

const CoronaState = (props) => {
  const initialState = {
    total: null,
    country: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(CoronaReducer, initialState);

  // Get Totals
  const getTotal = async () => {
    try {
      const res = await axios.get(
        'https://covid-19-data.p.rapidapi.com/totals?format=undefined',
        config
      );

      dispatch({
        type: GET_TOTAL,
        payload: res.data[0],
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: DATA_ERROR,
      });
    }
  };

  // Get Country Data By Name
  const getCountryData = async (country) => {
    try {
      const res = await axios.get(
        `https://covid-19-data.p.rapidapi.com/country?format=undefined&name=${country}`,
        config
      );

      dispatch({
        type: GET_COUNTRY,
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
    <CoronaContext.Provider
      value={{
        total: state.total,
        country: state.country,
        loading: state.loading,
        getTotal,
        getCountryData,
      }}
    >
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaState;
