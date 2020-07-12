import contactsTypes from './contactsTypes';
import { v4 as uuidv4 } from 'uuid';


const addContact = (text) => {
  return {
    type: contactsTypes.ADD_CONTACT,
    
    payload: {
      todo: {
        id: uuidv4(),
        text,
      },
    },
  };
};

const deleteContact = (idItemDelete) => {
  return {
    type: contactsTypes.DELETE_CONTACT,
    payload: {
      id: idItemDelete,
    },
  };
};

const changeContact = (idItemChange, changeText) => {
  return {
    type: contactsTypes.CHANGE_CONTACT,
    payload: {
      id: idItemChange,
      text: changeText,
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

export default { addContact, deleteIdEditContact, addIdEditContact, changeContact, deleteContact };
