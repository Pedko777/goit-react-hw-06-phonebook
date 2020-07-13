import themeTypes from './themeTypes';

const themeReducer = (state = [], action) => {
    switch (action.type) {
      case themeTypes.CHANGE_THEME:
      if (state && state === 'light') {
        return 'dark';
      } else {
        return 'light';
      }
      default:
        return state;
    }
  };

  export default themeReducer;