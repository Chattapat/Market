import React, { useState, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// Create a new theme
const theme = createTheme({
  palette: {
    text: {
      secondary: '#cfcfcf', // Color for Typography
    },
    primary: {
      main: '#ffc855', // Main color for Link
    },
  },
});

// Custom styled button
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#aeaeae', // Button background color
  color: '#ffffff', // Button text color
  '&:hover': {
    backgroundColor: '#039ef4', // Hover color
  },
}));

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmpassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/register', { // Backend server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          firstname,
          lastname,
          email,
          tel,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.success) {
        toast.success('Registration successful');
        router.push('/login');
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      toast.error(`Error: ${errorMessage}`);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/imgs/background.jpg)', // Background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(162, 225, 255, 1.0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderRadius: 7,
              padding: 3.5,
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: '#FFFFFF' }}>
              REGISTER
            </Typography>

            {/* Username */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}
            />

            {/* First Name */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="given-name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}
            />

            {/* Last Name */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="family-name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}
            />

            {/* Email */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}
            />

            {/* Tel */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="tel"
              label="Telephone"
              name="tel"
              autoComplete="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}
            />

            {/* Password */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}
            />

            {/* Confirm Password */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              autoComplete="new-password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}
            />

            <CustomButton
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              REGISTER
            </CustomButton>

            <Typography variant="body2" color="text.secondary">
              {"Already have an account? "}
              <Link href="/login" variant="body2">
                LOGIN
              </Link>
            </Typography>
          </Box>
        </Container>

        {/* CONTACT link at the bottom right of the page */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            right: 40,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="/icon/contact.png" // Path to the icon in the public folder
            alt="Contact Icon"
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          <Link href="/contact" variant="body1" sx={{ color: '#000000' }}>
            CONTACT US
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
