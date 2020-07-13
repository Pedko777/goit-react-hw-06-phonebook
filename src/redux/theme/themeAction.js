import ActionTypes from './themeTypes';

const changeTheme = (theme) => ({
  type: ActionTypes.CHANGE_THEME,
  payload: {
    theme,
  },
});

export default { changeTheme };