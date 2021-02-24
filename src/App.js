import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { Container } from '@material-ui/core';


const App = () => {

  return (
    // disableGutters - добавляет отступы справо и слево
    // maxWidth - отключает разметку по допустимой размерности
    <Container disableGutters={false} maxWidth="xl">
      <Header />
      <NavBar />
      <Main />
    </Container>
  );
};


App.propTypes = {

};


export default App;

