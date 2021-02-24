import React from 'react';
import PropTypes from 'prop-types';
import { 
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableCell,
} from '@material-ui/core';

const TableRetakes = () => {
    return (
        <Paper>
            <TableContainer style={{marginTop: '4%'}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableCell>
                            12321312312
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableCell>
                            12321312312
                        </TableCell>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};


TableRetakes.propTypes = {

};


export default TableRetakes;
