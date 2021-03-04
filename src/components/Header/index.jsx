import React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Toolbar,
    Fab,
    Grid
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const underscoreLink = {
    'textDecoration': 'none'
}

const Header = () => {

    return (
        <header>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container spacing={5}>
                        <Grid item xs="auto" sm={3} md={3} lg={3} xl="auto">
                            <NavLink style={underscoreLink} to="/">
                                <Fab color="secondary" variant="extended">
                                    Сутденты
                                </Fab>
                            </NavLink>
                        </Grid>
                        <Grid item xs="auto" sm={3} md={3} lg={3} xl="auto">
                            <NavLink style={underscoreLink} to="/attestation">
                                <Fab color="secondary" variant="extended">
                                    Аттестация
                                </Fab>
                            </NavLink>
                        </Grid>
                        <Grid item xs="auto" sm={3} md={3} lg={3} xl="auto">
                            <NavLink style={underscoreLink} to="/retake">
                                <Fab color="secondary" variant="extended">
                                    Пересдачи
                                </Fab>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </header>
    );
};


Header.propTypes = {

};


export default Header;
