import React, { useState, useEffect } from 'react';
import Heading from "../../components/Heading";
import TableList from "../../components/TableList";
import { CircularProgress, Box } from '@mui/material';

const Users = () => {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulate fetching data from an API
    useEffect(() => {
        const fetchData = async () => {
            // Simulate an API request delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // You can replace this static array with an API call
            const userData = [
                { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
                { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin' },
                { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Admin' },
                { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User' },
                { id: 5, name: 'Carol White', email: 'carol.white@example.com', role: 'User' },
                { id: 6, name: 'David Green', email: 'david.green@example.com', role: 'User' },
                { id: 7, name: 'Eve Black', email: 'eve.black@example.com', role: 'Admin' },
                { id: 8, name: 'Frank Harris', email: 'frank.harris@example.com', role: 'User' },
                { id: 9, name: 'Grace Lee', email: 'grace.lee@example.com', role: 'Admin' },
                { id: 10, name: 'Henry Wilson', email: 'henry.wilson@example.com', role: 'User' },
                { id: 11, name: 'Ivy Moore', email: 'ivy.moore@example.com', role: 'Admin' },
                { id: 12, name: 'Jack Taylor', email: 'jack.taylor@example.com', role: 'User' },
                { id: 13, name: 'Kathy Martinez', email: 'kathy.martinez@example.com', role: 'Admin' },
                { id: 14, name: 'Leo Anderson', email: 'leo.anderson@example.com', role: 'User' },
                { id: 15, name: 'Mia Thomas', email: 'mia.thomas@example.com', role: 'Admin' },
                { id: 16, name: 'Nate Clark', email: 'nate.clark@example.com', role: 'User' },
                { id: 17, name: 'Olivia Lewis', email: 'olivia.lewis@example.com', role: 'User' },
                { id: 18, name: 'Paul Walker', email: 'paul.walker@example.com', role: 'Admin' },
                { id: 19, name: 'Quinn Young', email: 'quinn.young@example.com', role: 'Admin' },
                { id: 20, name: 'Rachel Scott', email: 'rachel.scott@example.com', role: 'User' },
                { id: 21, name: 'Steve King', email: 'steve.king@example.com', role: 'User' },
                { id: 22, name: 'Tina Adams', email: 'tina.adams@example.com', role: 'Admin' },
                { id: 23, name: 'Ulysses Rogers', email: 'ulysses.rogers@example.com', role: 'User' },
                { id: 24, name: 'Vera Carter', email: 'vera.carter@example.com', role: 'Admin' },
                { id: 25, name: 'Will Turner', email: 'will.turner@example.com', role: 'User' },
                { id: 26, name: 'Xander Hughes', email: 'xander.hughes@example.com', role: 'Admin' },
                { id: 27, name: 'Yara Nelson', email: 'yara.nelson@example.com', role: 'User' },
                { id: 28, name: 'Zane Ford', email: 'zane.ford@example.com', role: 'Admin' }
            ];

            setDataList(userData);
            setLoading(false);
        };

        fetchData();
    }, []); // Runs once on component mount

    const handleEdit = (userId) => {
        console.log('Edit user with id:', userId);
    };

    const handleDelete = (userId) => {
        console.log('Delete user with id:', userId);
        // Remove the user from the list
        const updatedData = dataList.filter((user) => user.id !== userId);
        setDataList(updatedData);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 110px)' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <Heading title="Users" />
            <TableList dataList={dataList} onEdit={handleEdit} onDelete={handleDelete} />
        </>
    );
};

export default Users;
