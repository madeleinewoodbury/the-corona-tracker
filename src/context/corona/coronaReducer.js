import { GET_DATA, DATA_ERROR } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
      };
    case DATA_ERROR:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};
