import React from 'react';
import { Container } from '@mui/material'; // นำเข้า Container จาก MUI

const Contact: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-8 text-base">
          If you have any questions, feel free to reach out to us through the following channels:
        </p>
        <div className="flex flex-col items-center space-y-6 mb-8">
          <a
            href="https://www.facebook.com/chattapat.ratchain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-transform duration-300 transform hover:scale-110"
          >
            <img 
              src="/icon/facebook.png"
              alt="Facebook"
              className="transform scale-75 transition-transform duration-300 hover:scale-90 cursor-pointer"
              style={{ width: 'auto', height: 'auto' }}
            />
            <span className="text-base hidden md:inline">Facebook</span>
          </a>
          <a
            href="https://line.me/R/ti/p/%40yourlineid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-500 hover:text-green-700 transition-transform duration-300 transform hover:scale-110"
          >
            <img 
              src="/icon/line.png"
              alt="LINE"
              className="transform scale-75 transition-transform duration-300 hover:scale-90 cursor-pointer"
              style={{ width: 'auto', height: 'auto' }}
            />
            <span className="text-base hidden md:inline">LINE</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

