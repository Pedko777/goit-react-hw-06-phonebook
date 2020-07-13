import contactsTypes from './contactsTypes';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => {
  return {
    type: contactsTypes.ADD_CONTACT,

    payload: {
      contact: {
        id: uuidv4(),
        name: name,
        number: number,
      },
    },
  };
};

const deleteContact = idContactDelete => {
  return {
    type: contactsTypes.DELETE_CONTACT,
    payload: {
      id: idContactDelete,
    },
  };
};

const filtredContact = filter => {
  return {
    type: contactsTypes.FILTER_CONTACT,
    payload: {
      filter,
    },
  };
};

const changeContact = (idContactChange, changeName, changeNumber) => {
  return {
    type: contactsTypes.CHANGE_CONTACT,
    payload: {
      id: idContactChange,
      name: changeName,
      number: changeNumber,
    },
  };
};

const addIdEditContact = id => {
  return {
    type: contactsTypes.ADD_ID_EDIT_CONTACT,

    payload: {
      id: id,
    },
  };
};

const deleteIdEditContact = id => {
  return {
    type: contactsTypes.DELETE_ID_EDIT_CONTACT,

    payload: {
      id: id,
    },
  };
};

export default {
  addContact,
  deleteContact,
  filtredContact,
  changeContact,
  addIdEditContact,
  deleteIdEditContact,
};
