import { FC } from 'react';
import { useTheme } from 'next-themes'; // นำเข้า useTheme จาก next-themes
import Link from 'next/link'; // นำเข้า Link จาก Next.js

const Home: FC = () => {
  const { theme } = useTheme(); // ใช้ useTheme เพื่อเข้าถึงธีมปัจจุบัน

  return (
    <div className="container">
      {/* Description Section */}
      <header className="header">
        <h1>WELCOME TO OUR MARKET!</h1>
        <p>Your one-stop shop for all the best products available. Explore our wide range of items and find what suits you best.</p>
      </header>

      {/* Products Section */}
      <main className="main-content">
        <div className="product-section">
          <h2>Featured Products</h2>
          <div className="product-list">
            <div className="product-card">
              <img src="/icon/product1.png" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of product 1.</p>
            </div>
            <div className="product-card">
              <img src="/icon/product2.png" alt="Product 2" />
              <h3>Product 2</h3>
              <p>Description of product 2.</p>
            </div>
            <div className="product-card">
              <img src="/icon/product3.png" alt="Product 3" />
              <h3>Product 3</h3>
              <p>Description of product 3.</p>
            </div>
          </div>
          <Link href="/shop" passHref>
            <span className="shop-button">Explore Our Shop</span>
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>MARKET101</p>
        <p>
          YOU HAVE ANY QUESTIONS?{' '}
          <Link href="/contact" passHref>
            <span className="contact-link">Contact Us</span>
          </Link>
        </p>
      </footer>

      <style jsx>{`
        :root {
          --header-bg: ${theme === 'light' ? '#f4f4f4' : '#333'};
          --header-text: ${theme === 'light' ? '#333' : '#f4f4f4'};
          --footer-bg: ${theme === 'light' ? '#f4f4f4' : '#333'};
          --footer-text: ${theme === 'light' ? '#333' : '#f4f4f4'};
          --info-text: ${theme === 'light' ? '#333' : '#f4f4f4'};
          --spinner-bg: ${theme === 'light' ? '#3498db' : '#1abc9c'};
        }
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        .header {
          text-align: center;
          padding: 2rem;
          background-color: var(--header-bg);
          border-bottom: 1px solid #ddd;
        }
        .header h1 {
          color: var(--header-text);
        }
        .header p {
          color: var(--info-text);
        }
        .main-content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
        .product-section {
          text-align: center;
        }
        .product-list {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .product-card {
          background-color: var(--header-bg);
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 200px;
        }
        .product-card img {
          width: 100%;
          border-radius: 8px;
        }
        .shop-button {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #3498db;
          color: #fff;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
        }
        .shop-button:hover {
          background-color: #2980b9;
        }
        .footer {
          text-align: center;
          padding: 1rem;
          background-color: var(--footer-bg);
          border-top: 1px solid #ddd;
        }
        .footer p {
          color: var(--footer-text);
        }
        .contact-link {
          color: var(--footer-text);
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Home;
