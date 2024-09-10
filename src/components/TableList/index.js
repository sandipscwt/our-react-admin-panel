import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    IconButton, TablePagination, TextField, InputAdornment, TableSortLabel
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

const TableList = ({ dataList, onEdit, onDelete }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortRequest = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const compare = (a, b, orderBy) => {
        if (a[orderBy] < b[orderBy]) {
            return order === 'asc' ? -1 : 1;
        }
        if (a[orderBy] > b[orderBy]) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    };

    // Dynamically get table column keys
    const tableHeaders = dataList.length > 0 ? Object.keys(dataList[0]) : [];

    // Filter and sort users based on search term and sort order
    const filteredUsers = dataList
        .filter(data =>
            tableHeaders.some(header =>
                data[header].toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
        .sort((a, b) => compare(a, b, orderBy));

    // Paginate filtered users
    const paginatedUsers = filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <div className='whiteBgWrap'>
            <div className="tableWrapp">
                <div className='searchField'>
                    <TextField
                        label="Search"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={searchTerm}
                        onChange={handleSearch}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={{ marginBottom: '16px' }}
                    />
                </div>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {tableHeaders.map((header) => (
                                    <TableCell key={header}>
                                        <TableSortLabel
                                            active={orderBy === header}
                                            direction={orderBy === header ? order : 'asc'}
                                            onClick={() => handleSortRequest(header)}
                                        >
                                            {header.charAt(0).toUpperCase() + header.slice(1)}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedUsers.map((data) => (
                                <TableRow key={data.id}>
                                    {tableHeaders.map((header) => (
                                        <TableCell key={header}>{data[header]}</TableCell>
                                    ))}
                                    <TableCell>
                                        <IconButton onClick={() => onEdit(data.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => onDelete(data.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredUsers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    );
};

export default TableList;
