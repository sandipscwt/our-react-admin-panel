import React, { useState } from 'react';
import { TextField, Button, Box, RadioGroup, Radio, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import Heading from "../../components/Heading";

const DynamicFields = () => {
    const [inputFields, setInputFields] = useState([
        { name: '', email: '', description: '', age: '', gender: '', agree: false, file: null }
    ]);

    const handleAddField = () => {
        setInputFields([...inputFields, { name: '', email: '', description: '', age: '', gender: '', agree: false, file: null }]);
    };

    const handleRemoveField = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const { name, value, type, checked } = event.target;
        const values = [...inputFields];
        if (type === 'checkbox') {
            values[index][name] = checked;
        } else {
            values[index][name] = value;
        }
        setInputFields(values);
    };

    const handleFileChange = (index, event) => {
        const values = [...inputFields];
        values[index].file = event.target.files[0];
        setInputFields(values);
    };

    const handleRemoveFile = (index) => {
        const values = [...inputFields];
        values[index].file = null;
        setInputFields(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data', inputFields);
    };

    return (
        <>
            <Heading title="Repeter Form" />
            <div className='whiteBgWrap p-3'>
                <form onSubmit={handleSubmit}>
                    {inputFields.map((inputField, index) => (
                        <Box key={index} mb={2} display="flex" flexDirection="column" gap={2}>
                            <Box display="flex" gap={2}>
                                <TextField
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    value={inputField.name}
                                    onChange={event => handleInputChange(index, event)}
                                    fullWidth
                                    sx={{ flex: 1 }}
                                />
                                <TextField
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    value={inputField.email}
                                    onChange={event => handleInputChange(index, event)}
                                    fullWidth
                                    sx={{ flex: 1 }}
                                />
                            </Box>
                            <TextField
                                name="description"
                                label="Description"
                                variant="outlined"
                                value={inputField.description}
                                onChange={event => handleInputChange(index, event)}
                                multiline
                                rows={4}
                                fullWidth
                            />
                            <TextField
                                name="age"
                                label="Age"
                                variant="outlined"
                                type="number"
                                value={inputField.age}
                                onChange={event => handleInputChange(index, event)}
                                fullWidth
                            />
                            <RadioGroup
                                name="gender"
                                value={inputField.gender}
                                onChange={event => handleInputChange(index, event)}
                                row
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="agree"
                                        checked={inputField.agree}
                                        onChange={event => handleInputChange(index, event)}
                                    />
                                }
                                label="Agree to terms"
                            />
                            <Button
                                variant="contained"
                                component="label"
                                sx={{ maxWidth: '200px' }} // Limit button width
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden
                                    onChange={event => handleFileChange(index, event)}
                                />
                            </Button>
                            {inputField.file && (
                                <Box mt={2} display="flex" alignItems="center" gap={2}>
                                    <img
                                        src={URL.createObjectURL(inputField.file)}
                                        alt="Preview"
                                        style={{ maxWidth: '100px', maxHeight: '100px' }}
                                    />
                                    <IconButton
                                        color="error"
                                        onClick={() => handleRemoveFile(index)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </Box>
                            )}
                            <Button
                                variant="outlined"
                                color="error"
                                sx={{ maxWidth: '200px' }} // Limit button width
                                onClick={() => handleRemoveField(index)}
                            >
                                Remove Field
                            </Button>
                        </Box>
                    ))}

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddField}
                        startIcon={<Add />}
                        sx={{ maxWidth: '150px' }} // Limit button width
                    >
                        Add More
                    </Button>

                    <Box mt={4}>
                        <Button variant="contained" color="secondary" type="submit" sx={{ maxWidth: '150px' }}>
                            Submit
                        </Button>
                    </Box>
                </form>
            </div>
        </>
    );
};

export default DynamicFields;
