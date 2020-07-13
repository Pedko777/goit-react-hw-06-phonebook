import React from 'react';
import styles from './contactList.module.css';
import ContactListItem from '../contactListItem/ContactListItem';
import { connect } from 'react-redux';

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} id={contact.id} />
      ))}
    </ul>
  );
};


const mapStateToProps = state => {
  const filter = state.contactsRoot.filter;
  return {
    contacts: state.contactsRoot.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
  };
};

export default connect(mapStateToProps)(ContactList);
