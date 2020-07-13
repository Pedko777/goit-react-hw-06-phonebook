import { combineReducers } from 'redux';
import contactsTypes from './contactsTypes';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case contactsTypes.ADD_CONTACT:
      if (
        state &&
        state.find(contact => action.payload.contact.name === contact.name)
      ) {
        alert('User with this name is already exist');
        return state;
      } else {
        return [...state, action.payload.contact];
      }

    case contactsTypes.DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload.id);

    case contactsTypes.CHANGE_CONTACT:
      return state.map(contact =>
        contact.id === action.payload.id
          ? { ...contact, name: action.payload.name, number: action.payload.number }
          : contact,
      );
    default:
      return state;
  }
};

const idContactEditReducer = (state = [], action) => {
  switch (action.type) {
    case contactsTypes.ADD_ID_EDIT_CONTACT:
      return [...state, action.payload.id];

    case contactsTypes.DELETE_ID_EDIT_CONTACT:
      return state.filter(id => id !== action.payload.id);

    default:
      return state;
  }
};

const filterContacts = (state = '', action) => {
  switch (action.type) {
    case contactsTypes.FILTER_CONTACT:
      return action.payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  idEditContact: idContactEditReducer,
  filter: filterContacts,
});
