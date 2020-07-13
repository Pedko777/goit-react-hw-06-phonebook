import React from 'react';
import { connect } from 'react-redux';
import ConatctForm from './components/conactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import styles from './App.css';
import { Logo } from './components/logo/Logo';
import themeAction from "./redux/theme/themeAction"
import themeSwitch from "./services/themeSwitch"


const App = ({theme, toggleTheme}) => {
  // console.log(theme)
  // console.log(themeSwitch)
  return (
    <div
    style={{
      color: themeSwitch[theme].fontColor,
      background: themeSwitch[theme].bodybg,
    }}
    >
      <div>
        <>
          <Logo />
          <button
          onClick={toggleTheme}
          >
            Change Theme
          </button>
        </>
      </div>
      <ConatctForm />
      <h2 className={styles.sectionTitle}>Contacts</h2>
       <Filter />
      <ContactList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  toggleTheme: themeAction.changeTheme,
};


export default connect(mapStateToProps, mapDispatchToProps )(App);
