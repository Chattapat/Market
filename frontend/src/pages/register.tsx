import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';

// สร้างธีมใหม่
const theme = createTheme({
  palette: {
    text: {
      secondary: '#cfcfcf', // สีสำหรับ Typography
    },
    primary: {
      main: '#ffc855', // สีหลักสำหรับ Link
    },
  },
});

// สไตล์ปุ่มที่กำหนดเอง
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#aeaeae', // กำหนดสีพื้นหลังของปุ่ม
  color: '#ffffff', // กำหนดสีข้อความของปุ่ม
  '&:hover': {
    backgroundColor: '#039ef4', // สีเมื่อ hover
  },
}));

export default function RegisterPage() {
  const router = useRouter();

  // ฟังก์ชันตรวจสอบและสมัครสมาชิก
  const handleRegister = () => {
    // ตรวจสอบข้อมูลฟอร์ม (ตัวอย่างเบื้องต้น)
    const formData = {
      username: (document.getElementById('username') as HTMLInputElement).value,
      firstname: (document.getElementById('firstname') as HTMLInputElement).value,
      lastname: (document.getElementById('lastname') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      tel: (document.getElementById('tel') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
      confirmpassword: (document.getElementById('confirmpassword') as HTMLInputElement).value,
    };

    if (formData.password !== formData.confirmpassword) {
      alert('Passwords do not match');
      return;
    }

    // เขียนลอจิกการสมัครสมาชิกที่นี่ (ถ้ามี)
    // จากนั้นเปลี่ยนเส้นทางไปยังหน้า /home
    router.push('/home');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'absolute', // ทำให้ Box ครอบคลุมทั้งหน้าจอ
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/imgs/background.jpg)', // ใช้รูปภาพพื้นหลัง
          backgroundSize: 'cover', // ปรับขนาดภาพให้พอดีกับหน้าจอ
          backgroundPosition: 'center', // จัดภาพให้อยู่ตรงกลาง
          backgroundColor: 'rgba(162, 225, 255, 1.0)', // เพิ่มพื้นหลังแบบสีและความโปร่งแสง
          display: 'flex', // ใช้ Flexbox เพื่อจัดตำแหน่งกลาง
          alignItems: 'center', // จัดตำแหน่งแนวตั้งกลาง
          justifyContent: 'center', // จัดตำแหน่งแนวนอนกลาง
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
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
              }}
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
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
              }}
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
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
              }}
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
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
              }}
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
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
              }}
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
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
              }}
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
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
              }}
            />

            <CustomButton
              type="button" // เปลี่ยนจาก "submit" เป็น "button"
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

        {/* ลิงก์ CONTACT ที่มุมล่างขวาของหน้า */}
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
            src="/icon/contact.png" // ระบุ path ของไอคอนในโฟลเดอร์ public
            alt="Contact Icon"
            style={{
              width: '20px', // กำหนดขนาดของไอคอน
              height: '20px',
              marginRight: '8px', // ระยะห่างระหว่างไอคอนกับข้อความ
            }}
          />
          <Link href="/contact" variant="body1" sx={{ color: '#000000' }}>
            CONTACT US
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
