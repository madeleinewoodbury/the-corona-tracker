import { TOGGLE_THEME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      localStorage.setItem('isDark', !state.isDark);
      return {
        ...state,
        isDark: !state.isDark,
      };

    default:
      return state;
  }
};
