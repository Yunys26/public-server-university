export const descendingComparator = (a, b, orderBy) => {
    
    if (b[orderBy] < a[orderBy]) {
        return -1;
    } else if (b[orderBy] > a[orderBy]) {
        return 1;
    }

    return 0;
}

export const getComparator = (order, orderBy) => {

    if (order === 'desc') {
        return (a, b) => descendingComparator(a, b, orderBy)
    }

    return (a, b) => -descendingComparator(a, b, orderBy);
}

export const stableSort = (array, comparator) => {

    const stabilizedThis = array.map((el, index) => [el, index]);

    stabilizedThis.sort((a, b) => {

        const order = comparator(a[0], b[0]);

        if (order !== 0) {
            return order;
        }

        return a[1] - b[1];
    });

    return stabilizedThis.map((el) => el[0]);
}