import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate in the Login component
import { TextField, Button, Container, Typography, Box } from '@mui/material';  // Import Material-UI components

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Declare navigate within the Login component

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();  // Call the login handler passed as prop
    navigate('/');  // Navigate to dashboard after login
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',  // Full viewport height
          p: 3,
        }}
      >
        <div className="login_form_bg">
          <Typography component="h1" variant="h5">ADMIN LOGIN</Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: '100%' }}  // Ensure form takes full width within container
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </div>
      </Box>
    </Container>
  );
}

export default Login;
