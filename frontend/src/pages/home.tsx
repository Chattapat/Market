// pages/home.tsx
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>WELCOME TO OUR MARKET!</h1>
        <p>...</p>
      </header>

      <main className="main-content">
        <div className="verification-container">
          <div className="spinner">
            <div className="bubbles"></div>
            <div className="bubbles"></div>
            <div className="bubbles"></div>
          </div>
          <p className="info-text">Wait for connection Loading...</p>
        </div>
      </main>

      <footer className="footer">
        <p>YOU HAVE ANY QUESTIONS? <a href="/contact">contact us</a>.</p>
      </footer>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        .header {
          text-align: center;
          padding: 2rem;
          background-color: #f4f4f4;
          border-bottom: 1px solid #ddd;
        }
        .main-content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
        .verification-container {
          text-align: center;
        }
        .spinner {
          margin-bottom: 1rem;
        }
        .bubbles {
          width: 1rem;
          height: 1rem;
          margin: 0.5rem;
          border-radius: 50%;
          background-color: #3498db;
          animation: bounce 1.5s infinite ease-in-out;
        }
        .bubbles:nth-child(2) {
          animation-delay: 0.2s;
        }
        .bubbles:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
        .info-text {
          color: #333;
        }
        .footer {
          text-align: center;
          padding: 1rem;
          background-color: #f4f4f4;
          border-top: 1px solid #ddd;
        }
      `}</style>
    </div>
  );
};

export default Home;
