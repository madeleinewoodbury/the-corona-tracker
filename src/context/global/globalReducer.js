import { SET_THEME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};
