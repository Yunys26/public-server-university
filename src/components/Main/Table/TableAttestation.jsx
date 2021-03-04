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

const TableAttestation = () => {

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
        const responseGetDataStudent = () => axios.get('http://localhost:9999/students/all/journal/')
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
                               Предмет
                            </TableCell>
                            <TableCell>
                               Оценка
                            </TableCell>
                            <TableCell>
                                Группа
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ student_id, surname, student_name, second_name, short_name,  value, mark_name, group_name }, index) => (
                            <TableRow>
                                <TableCell>
                                    {student_id}
                                </TableCell>
                                <TableCell>
                                    {surname}
                                </TableCell>
                                <TableCell>
                                    {student_name}
                                </TableCell>
                                <TableCell>
                                    {second_name}
                                </TableCell>
                                <TableCell>
                                    {short_name}
                                </TableCell>
                                <TableCell>
                                    {mark_name}
                                </TableCell>
                                <TableCell>
                                    {group_name}
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


TableAttestation.propTypes = {

};


export default TableAttestation;
