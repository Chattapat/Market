import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

export default function LoginPage() {
    const router = useRouter();

  const handleLogin = () => {
    // เขียนลอจิกการ login ที่นี่ (ถ้ามี)
    // จากนั้นเปลี่ยนเส้นทางไปยังหน้า /home
    router.push('/home');
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Box
          sx={{
            position: 'absolute', // ทำให้ Box ครอบคลุมทั้งหน้าจอ
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/path/to/your/background.jpg)', // ใช้รูปภาพพื้นหลัง
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
                LOGIN
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 2,
                }}
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
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 2,
                }}
              />

              <Link href="/forgot-password" variant="body2" sx={{ alignSelf: 'flex-start', marginTop: 1 }}>
                Forgot password?
              </Link>

              <CustomButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                LOGIN
              </CustomButton>

              <Typography variant="body2" color="text.secondary">
                {"Don't have an account? "}
                <Link href="/register" variant="body2">
                  REGISTER
                </Link>
              </Typography>
            </Box>
          </Container>

          {/* ลิงก์ CONTACT ที่มุมล่างขวาของหน้า */}
          <Box
            sx={{
                position: 'absolute',
                bottom: 30, // ระยะห่างจากด้านล่างของหน้า
                right: 40, // ระยะห่างจากด้านขวาของหน้า
                display: 'flex', // จัดให้อยู่ในแถวเดียวกัน
                alignItems: 'center', // จัดตำแหน่งแนวตั้งกลาง
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
      </React.Fragment>
    </ThemeProvider>
  );
}
