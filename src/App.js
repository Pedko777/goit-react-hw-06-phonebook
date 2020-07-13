import React from 'react';
import ConatctForm from './components/conactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import styles from './App.css';
import { Logo } from './components/logo/Logo';
import themeAction from "./redux/theme/themeAction"
import themeConfig from "./components/services/themeConfig"
import { connect } from 'react-redux';


const App = ({theme, toggleTheme}) => {
  return (
    <div
    // style={{ 
    //   color: themeConfig[theme].fontColor, 
    //   background: themeConfig[theme].bodybg,
    //  }}
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
    theme: state.themeRoot,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: () => dispatch(themeAction.changeTheme),
  }
};

export default connect(mapStateToProps, mapDispatchToProps )(App);
