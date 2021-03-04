import React from 'react';
import PropTypes from 'prop-types';
import TableStudents from './Table/TableStudents';
import { Route, Switch } from 'react-router-dom';
import TableRetakes from './Table/TableRetakes';
import TableAttestation from './Table/TableAttestation';


const Main = () => {
    return (
        <main style={{ marginTop: '4%' }}>
            <Switch>
                <Route exact path="/">
                    <TableStudents />
                </Route>
                <Route exact path="/retake">
                    <TableRetakes />
                </Route>
                <Route exact path="/attestation">
                    <TableAttestation />
                </Route>
            </Switch>
        </main>
    );
};


Main.propTypes = {

};


export default Main;
