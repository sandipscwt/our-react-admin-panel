import React, { useState } from 'react';
import { TextField, Button, IconButton, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const DynamicFields = () => {
    const [inputFields, setInputFields] = useState([
        { name: '', email: '' }
    ]);

    const handleAddField = () => {
        setInputFields([...inputFields, { name: '', email: '' }]);
    };

    const handleRemoveField = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data', inputFields);
    };

    return (
        <form onSubmit={handleSubmit}>
            {inputFields.map((inputField, index) => (
                <Box key={index} mb={2} display="flex" alignItems="center" gap={2}>
                    <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        value={inputField.name}
                        onChange={event => handleInputChange(index, event)}
                        fullWidth
                    />
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={inputField.email}
                        onChange={event => handleInputChange(index, event)}
                        fullWidth
                    />
                    <IconButton
                        disabled={inputFields.length === 1}
                        onClick={() => handleRemoveField(index)}
                    >
                        <Remove />
                    </IconButton>
                </Box>
            ))}
            
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddField}
                startIcon={<Add />}
            >
                Add More
            </Button>

            <Box mt={4}>
                <Button variant="contained" color="secondary" type="submit">
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default DynamicFields;
