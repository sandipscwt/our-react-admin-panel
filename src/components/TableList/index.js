import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    IconButton, TablePagination, TextField, InputAdornment
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

const TableList = ({ dataList, onEdit, onDelete }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

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

    // Filter users based on search term
    const filteredUsers = dataList.filter(data =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Paginate filtered users
    const paginatedUsers = filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
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
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedUsers.map((data) => (
                            <TableRow key={data.id}>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.email}</TableCell>
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
    );
};

export default TableList;
