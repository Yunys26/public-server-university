import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';


const App = () => {

  return (
    // disableGutters - добавляет отступы справо и слево
    // maxWidth - отключает разметку по допустимой размерности
    <Switch>
      <Route strict path="/">
        <Container disableGutters={false} maxWidth="xl">
          <Header />
          <NavBar />
          <Main />
        </Container>
      </Route>
    </Switch>
  );
};


App.propTypes = {

};


export default App;

