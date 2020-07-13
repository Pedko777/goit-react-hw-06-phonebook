import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './contactListItem.module.css';
import contactsAction from '../../redux/contacts/contactsAction';


class ContactListItem extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { deleteIdEditContact, changeContact } = this.props;
    const { name, number } = this.state;
    changeContact(name, number);
    deleteIdEditContact();
  };

  render() {
    const { contact, isShowForm, addIdEditContact, deleteContact } = this.props;
    const { name, number } = this.state;
    return (
      <li className={styles.listItem}>
        <p className={styles.listItemP}>
          name: {contact.name} tel: {contact.number}
        </p>

        {!isShowForm && (
          <button
            className={styles.listItemButton}
            type="button"
            onClick={addIdEditContact}
          >
            Start Edit
          </button>
        )}

        <button
          className={styles.listItemButton}
          onClick={deleteContact}
          type="button"
        >
          Delete
        </button>

        {isShowForm && (
          <form className={styles.editForm} onSubmit={this.handleSubmit}>
            <label className={styles.label}>
              Name*
              <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                placeholder="name"
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label}>
              Phone number*
              <input
                className={styles.input}
                type="tel"
                name="number"
                value={number}
                onChange={this.handleChange}
                placeholder="number"
              />
            </label>
            <button className={styles.button} type="submit">
              EDIT
            </button>
          </form>
        )}
      </li>
    );
  }
}

const mapStateToProps = (state, { id }) => {
  const arrayIdsEditContact = state.contactsRoot.idEditContact;
  const isShowForm = arrayIdsEditContact.some(idEdit => idEdit === id);
  return {
    isShowForm,
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    deleteContact: () => dispatch(contactsAction.deleteContact(id)),
    changeContact: (name, number) =>
      dispatch(contactsAction.changeContact(id, name, number)),
    addIdEditContact: () => dispatch(contactsAction.addIdEditContact(id)),
    deleteIdEditContact: () => dispatch(contactsAction.deleteIdEditContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
