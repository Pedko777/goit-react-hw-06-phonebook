import { combineReducers } from 'redux';
import contactsTypes from './contactsTypes';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case contactsTypes.ADD_CONTACT:
      return [...state, action.payload.todo];

    case contactsTypes.DELETE_CONTACT:
      return state.filter(item => item.id !== action.payload.id);

    case contactsTypes.CHANGE_CONTACT:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item,
      );

    default:
      return state;
  }
};

const idContactEditReducer = (state =[], action) => {
    switch (action.type) {
        case contactsTypes.ADD_ID_EDIT_CONTACT:
          return [...state, action.payload.id];
    
        case contactsTypes.DELETE_ID_EDIT_CONTACT:
          return state.filter(id => id !== action.payload.id);
    
        default:
          return state;
      }
}


export default combineReducers({
  contacts: contactsReducer,
  idEditContact: idContactEditReducer,
});
