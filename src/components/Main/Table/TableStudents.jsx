import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TablePagination,
    TableFooter,
    Button
} from '@material-ui/core';

const TableStudents = () => {

    const [studentsData, setStudentsData] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        const responseGetDataStudent = () => axios.get('http://localhost:9999/students')
            .then((res) => setStudentsData(res.data))
            .catch(error => console.log(error));
        responseGetDataStudent();
    }, [])
    console.log(studentsData)
    return (
        <Paper>
            <TableContainer style={{ marginTop: '4%' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                ID
                            </TableCell>
                            <TableCell>
                                Фамилия
                            </TableCell>
                            <TableCell>
                                Имя
                            </TableCell>
                            <TableCell>
                                Отчество
                            </TableCell>
                            <TableCell>
                                Номер группы
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ id, name, second_name, surname, study_group_id }, index) => (
                            <TableRow>
                                <TableCell>
                                    {id}
                                </TableCell>
                                <TableCell>
                                    {surname}
                                </TableCell>
                                <TableCell>
                                    {name}
                                </TableCell>
                                <TableCell>
                                    {second_name}
                                </TableCell>
                                <TableCell>
                                    {study_group_id}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 20]}
                                count={studentsData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                labelRowsPerPage="Студентов на одной странице:"
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>

        </Paper>
    );
};


TableStudents.propTypes = {

};


export default TableStudents;
