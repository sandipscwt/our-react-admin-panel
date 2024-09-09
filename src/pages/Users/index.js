import TableList from "../../components/TableList";
const handleEdit = (userId) => {
    console.log('Edit user with id:', userId);
    // Implement edit functionality
};

const handleDelete = (userId) => {
    console.log('Delete user with id:', userId);
    // Implement delete functionality
};

const dataList = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
    { id: 5, name: 'Carol White', email: 'carol.white@example.com' },
    { id: 6, name: 'David Green', email: 'david.green@example.com' },
    { id: 7, name: 'Eve Black', email: 'eve.black@example.com' },
    { id: 8, name: 'Frank Harris', email: 'frank.harris@example.com' },
    { id: 9, name: 'Grace Lee', email: 'grace.lee@example.com' },
    { id: 10, name: 'Henry Wilson', email: 'henry.wilson@example.com' },
    { id: 11, name: 'Ivy Moore', email: 'ivy.moore@example.com' },
    { id: 12, name: 'Jack Taylor', email: 'jack.taylor@example.com' },
    { id: 13, name: 'Kathy Martinez', email: 'kathy.martinez@example.com' },
    { id: 14, name: 'Leo Anderson', email: 'leo.anderson@example.com' },
    { id: 15, name: 'Mia Thomas', email: 'mia.thomas@example.com' },
    { id: 16, name: 'Nate Clark', email: 'nate.clark@example.com' },
    { id: 17, name: 'Olivia Lewis', email: 'olivia.lewis@example.com' },
    { id: 18, name: 'Paul Walker', email: 'paul.walker@example.com' },
    { id: 19, name: 'Quinn Young', email: 'quinn.young@example.com' },
    { id: 20, name: 'Rachel Scott', email: 'rachel.scott@example.com' },
    { id: 21, name: 'Steve King', email: 'steve.king@example.com' },
    { id: 22, name: 'Tina Adams', email: 'tina.adams@example.com' },
    { id: 23, name: 'Ulysses Rogers', email: 'ulysses.rogers@example.com' },
    { id: 24, name: 'Vera Carter', email: 'vera.carter@example.com' },
    { id: 25, name: 'Will Turner', email: 'will.turner@example.com' }
];

const Users = () => {
    return (
        <TableList dataList={dataList} onEdit={handleEdit} onDelete={handleDelete} />
    );
}
export default Users;