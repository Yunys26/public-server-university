import React from 'react';
import PropTypes from 'prop-types';
import TableStudents from './Table/TableStudents';
import { Route, Switch } from 'react-router-dom';


const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <TableStudents />
                </Route>
            </Switch>
        </main>
    );
};


Main.propTypes = {

};


export default Main;
