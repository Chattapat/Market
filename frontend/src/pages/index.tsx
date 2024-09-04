import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// ปุ่มที่กำหนดเอง
function MyButton({ title }: { title: string }) {
  return (
    <button
      style={{
        fontSize: '1.5rem', // ขนาดของฟอนต์
        padding: '15px 30px', // ขนาดของ padding
        backgroundColor: '#6f6f6f', // สีพื้นหลัง
        color: '#fff', // สีของข้อความ
        border: 'none', // ไม่มีขอบ
        borderRadius: '10px', // ความมนของขอบ
        cursor: 'pointer', // เปลี่ยนเมาส์เป็นรูปมือเมื่อ hover
        transition: 'background-color 0.3s ease, transform 0.3s ease', // เพิ่มเอฟเฟกต์การเปลี่ยนสีและขยายเมื่อ hover
        fontFamily: 'Roboto, sans-serif', // ใช้ฟอนต์ที่นำเข้า
        fontWeight: '550', // หนา
        textTransform: 'uppercase', // ข้อความเป็นตัวพิมพ์ใหญ่
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#04c900'; // สีเมื่อ hover
        e.currentTarget.style.transform = 'scale(1.05)'; // ขยายขนาดเมื่อ hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#dd0303'; // สีเมื่อไม่ hover
        e.currentTarget.style.transform = 'scale(1)'; // คืนขนาดเมื่อไม่ hover
      }}
    >
      {title}
    </button>
  );
}

export default function IndexPages() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: '#a2e1ff',
          height: '100vh', // กำหนดความสูงให้เต็มหน้าจอ
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
            padding: 0, // เอา padding ออกเพื่อให้ Container เต็มหน้าจอ
          }}
        >
          <MyButton title='WELCOME TO OUR MARKET' />
          <img
            src="/icon/click.png" // ระบุ path ของไอคอนในโฟลเดอร์ public
            alt="Icon"
            style={{
              width: '50px', // กำหนดขนาดของไอคอน
              height: '50px',
              marginLeft: '20px', // ระยะห่างระหว่างไอคอนกับปุ่ม
            }}
          />
        </Container>
      </Box>
    </React.Fragment>
  );
}
