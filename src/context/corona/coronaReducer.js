import { GET_TOTAL, GET_COUNTRY, DATA_ERROR } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TOTAL:
      return {
        ...state,
        total: payload,
        loading: false,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: payload,
        loading: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        total: null,
        country: null,
        loading: false,
      };
    default:
      return state;
  }
};
