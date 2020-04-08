import React, { useReducer } from 'react';
import axios from 'axios';
import CoronaContext from './coronaContext';
import CoronaReducer from './coronaReducer';
import {
  GET_TOTAL,
  GET_COUNTRIES,
  GET_COUNTRY,
  SORT_COUNTRIES,
  DATA_ERROR,
} from '../types';

const CoronaState = (props) => {
  const initialState = {
    total: null,
    current: null,
    countries: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(CoronaReducer, initialState);

  // Get Totals
  const getTotal = async () => {
    try {
      const res = await axios.get('https://corona.lmao.ninja/all');

      dispatch({
        type: GET_TOTAL,
        payload: res.data,
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
        `https://corona.lmao.ninja/countries/${country}`
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

  // Get all countries
  const getAllCountries = async (sortBy = 'cases') => {
    try {
      const res = await axios.get(
        `https://corona.lmao.ninja/countries?sort=${sortBy}`
      );

      dispatch({
        type: GET_COUNTRIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: DATA_ERROR,
      });
    }
  };

  // Sort countries dynamically
  const sortByCountry = async (order) =>
    dispatch({ type: SORT_COUNTRIES, payload: order });

  return (
    <CoronaContext.Provider
      value={{
        total: state.total,
        countries: state.countries,
        current: state.current,
        loading: state.loading,
        getTotal,
        getCountryData,
        getAllCountries,
        sortByCountry,
      }}
    >
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaState;
