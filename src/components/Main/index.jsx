import React from 'react';
import PropTypes from 'prop-types';
import TableStudents from './Table/TableStudents';
import { Route, Switch } from 'react-router-dom';
import TableRetakes from './Table/TableRetakes';
import TableAttestation from './Table/TableAttestation';
import Table from './Table';

const Main = () => {

    const tableHeadTitle = {
        students: [],
        Attestation: [],
        Retakes: []
    };

    return (
        <main style={{ marginTop: '4%' }}>
            <Switch>
                <Route exact path="/">
                    {/* <Table /> */}
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
