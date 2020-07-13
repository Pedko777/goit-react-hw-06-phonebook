import themeTypes from './themeTypes';

const changeTheme = (theme) => ({
  type: themeTypes.CHANGE_THEME,
  payload: {
    theme,
  },
});

export default { changeTheme };