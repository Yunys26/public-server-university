import React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Toolbar,
    Fab,
    Grid
} from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';

const Header = () => {

    return (
        <header>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container spacing={5}>
                        <Grid item xs="auto" sm={3} md={3} lg={3} xl="auto">
                            <Fab color="secondary" variant="extended">
                                Сутденты
                            </Fab>
                        </Grid>
                        <Grid item xs="auto" sm={3} md={3} lg={3} xl="auto">
                            <Fab color="secondary" variant="extended">
                                Аттестация
                            </Fab>
                        </Grid>
                        <Grid item xs="auto" sm={3} md={3} lg={3} xl="auto">
                            <Fab color="secondary" variant="extended">
                                Пересдачи
                            </Fab>
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
