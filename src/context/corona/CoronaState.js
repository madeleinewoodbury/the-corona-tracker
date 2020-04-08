import React, { useReducer } from 'react';
import axios from 'axios';
import CoronaContext from './coronaContext';
import CoronaReducer from './coronaReducer';
import {
  GET_TOTAL,
  GET_COUNTRIES,
  GET_COUNTRY,
  SORT_BY_COUNTRY,
  SORT_BY_CASES,
  SORT_BY_DEATHS,
  SORT_BY_TESTS,
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
  const sortCountries = async (sort) => {
    switch (sort) {
      case 'country':
        return dispatch({ type: SORT_BY_COUNTRY });
      case 'cases':
        return dispatch({ type: SORT_BY_CASES });
      case 'deaths':
        return dispatch({ type: SORT_BY_DEATHS });
      case 'tests':
        return dispatch({ type: SORT_BY_TESTS });
      default:
        break;
    }
  };

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
        sortCountries,
      }}
    >
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaState;
