import React, { useState } from 'react';
import { CssBaseline, Box, Container, TextField, Button, Typography, Link } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  backgroundColor: '#aeaeae',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#039ef4', // Hover color
  },
}));

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulated user data
    const ExampleUser = {
      email: 'test@example.com',
      password: '123456',
    };

    if (email === ExampleUser.email && password === ExampleUser.password) {
      toast.success('Login successful');
      router.push('/home');
    } else {
      toast.error('Invalid email or password');
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
          backgroundImage: 'url(/imgs/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderRadius: 7,
              p: 3.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: '#FFFFFF', mb: 2 }}>
              LOGIN
            </Typography>

            {/* Email input field */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}
            />

            {/* Password input field */}
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
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}
            />

            <Link href="/forgot-password" variant="body2" sx={{ alignSelf: 'flex-start', mt: 1, color: '#ffc855' }}>
              Forgot password?
            </Link>

            <CustomButton
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              LOGIN
            </CustomButton>

            <Typography variant="body2" color="text.secondary">
              {"Don't have an account? "}
              <Link href="/register" variant="body2" sx={{ color: '#ffc855' }}>
                REGISTER
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
            src="/icon/contact.png"
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
};

export default LoginPage;
