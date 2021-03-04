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

const TableRetakes = () => {

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
        const responseGetDataStudent = () => axios.get('http://localhost:9999/students/all-retakes/')
            .then((res) => setStudentsData(res.data))
            .catch(error => console.log(error));
        responseGetDataStudent();
    }, [])

    console.log(studentsData)

    return (
        <Paper>
            <TableContainer>
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
                                Группа
                            </TableCell>
                            <TableCell>
                                Пересдача
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ id, surname, name, second_name, group, count }, index) => (
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
                                    {group}
                                </TableCell>
                                <TableCell>
                                    {count}
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


TableRetakes.propTypes = {

};


export default TableRetakes;
