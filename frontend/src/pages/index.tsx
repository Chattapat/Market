import React from 'react';
import { useRouter } from 'next/router'; // import useRouter จาก Next.js
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// ปุ่มที่กำหนดเอง
function MyButton({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick} // ใช้ฟังก์ชัน onClick
      style={{
        fontSize: '1.5rem',
        padding: '15px 30px',
        backgroundColor: '#6f6f6f',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '550',
        textTransform: 'uppercase',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#04c900';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#dd0303';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {title}
    </button>
  );
}

export default function IndexPages() {
  const router = useRouter(); // ใช้ useRouter เพื่อจัดการการนำทาง

  const handleClick = () => {
    router.push('/home'); // เมื่อกดปุ่มให้ไปที่ /login
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: '#a2e1ff',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
          }}
        >
          <MyButton title="WELCOME TO OUR MARKET" onClick={handleClick} />
          <img
            src="/icon/click.png"
            alt="Icon"
            style={{
              width: '50px',
              height: '50px',
              marginLeft: '20px',
            }}
          />
        </Container>
      </Box>
    </React.Fragment>
  );
}

