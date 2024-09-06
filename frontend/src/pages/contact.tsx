import React from 'react';
import { Container, Box, Typography, Link as MuiLink } from '@mui/material';
import { useTheme } from '@mui/system'; // ใช้ useTheme สำหรับการจัดการ Light/Dark mode

const Contact: React.FC = () => {
  const theme = useTheme(); // ดึงธีมปัจจุบัน

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : '#121212', // เปลี่ยนพื้นหลังตามโหมด
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.mode === 'light' ? 'white' : '#1E1E1E', // เปลี่ยนสีพื้นหลังของกล่องตามโหมด
          p: 8,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: 'center',
          color: theme.palette.mode === 'light' ? 'black' : 'white', // เปลี่ยนสีข้อความ
        }}
      >
        <Typography variant="h4" component="h1" fontWeight="bold" mb={4}>
          CONTACT US
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={8}>
          IF YOU HAVE ANY QUESTIONS
        </Typography>

        {/* Social Media Links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, mb: 8 }}>
          {/* Facebook Link */}
          <MuiLink
            href="https://www.facebook.com/chattapat.ratchain"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: theme.palette.mode === 'light' ? '#4267B2' : '#8b9dc3', // เปลี่ยนสีไอคอนตามโหมด
              '&:hover': {
                color: theme.palette.mode === 'light' ? '#365899' : '#3b5998',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
              },
            }}
          >
            <Box
              component="img"
              src="/icon/facebook.png"
              alt="Facebook"
              sx={{
                width: 40,
                height: 40,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(0.9)' },
              }}
            />
          </MuiLink>

          {/* LINE Link */}
          <MuiLink
            href="https://line.me/R/ti/p/%40yourlineid"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: theme.palette.mode === 'light' ? '#00c300' : '#66bb6a', // เปลี่ยนสีตามโหมด
              '&:hover': {
                color: theme.palette.mode === 'light' ? '#009900' : '#388e3c',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
              },
            }}
          >
            <Box
              component="img"
              src="/icon/line.png"
              alt="LINE"
              sx={{
                width: 40,
                height: 40,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(0.9)' },
              }}
            />
          </MuiLink>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
