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
import { dynamicSort } from '../../utils/helper';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TOTAL:
      return {
        ...state,
        total: payload,
        loading: false,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        loading: false,
      };
    case GET_COUNTRY:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case SORT_BY_COUNTRY:
      return {
        ...state,
        countries:
          payload.direction === 'down'
            ? state.countries.sort(dynamicSort('country'))
            : state.countries.sort(dynamicSort('-country')),
        sortByKey: payload.sortBy,
        sortDirection: payload.direction,
        loading: false,
      };
    case SORT_BY_CASES:
      return {
        ...state,
        countries:
          payload.direction === 'down'
            ? state.countries.sort((a, b) => (a.cases < b.cases ? 1 : -1))
            : state.countries.sort((a, b) => (a.cases > b.cases ? 1 : -1)),
        loading: false,
        sortByKey: payload.sortBy,
        sortDirection: payload.direction,
      };
    case SORT_BY_DEATHS:
      return {
        ...state,
        countries:
          payload.direction === 'down'
            ? state.countries.sort((a, b) => (a.deaths < b.deaths ? 1 : -1))
            : state.countries.sort((a, b) => (a.deaths > b.deaths ? 1 : -1)),
        loading: false,
        sortByKey: payload.sortBy,
        sortDirection: payload.direction,
      };
    case SORT_BY_TESTS:
      return {
        ...state,
        countries:
          payload.direction === 'down'
            ? state.countries.sort((a, b) => (a.tests < b.tests ? 1 : -1))
            : state.countries.sort((a, b) => (a.tests > b.tests ? 1 : -1)),
        loading: false,
        sortByKey: payload.sortBy,
        sortDirection: payload.direction,
      };
    case DATA_ERROR:
      return {
        ...state,
        total: null,
        current: null,
        countries: [],
        loading: false,
      };
    default:
      return state;
  }
};
