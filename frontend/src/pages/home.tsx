import { FC, useEffect, useState } from 'react';
import { useTheme } from 'next-themes'; 
import Link from 'next/link'; 

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Home: FC = () => {
  const { theme } = useTheme(); 
  const [products, setProducts] = useState<Product[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products'); 
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products); 
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>WELCOME TO OUR MARKET!</h1>
        <p>Your one-stop shop for all the best products available. Explore our wide range of items and find what suits you best.</p>
      </header>

      <main className="main-content">
        <div className="product-section">
          <h2>Featured Products</h2>
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <div className="product-list">
              {products.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              ))}
            </div>
          )}
          <Link href="/shop" passHref>
            <span className="shop-button">Explore Our Shop</span>
          </Link>
        </div>
      </main>

      <footer className="footer">
        <p>MARKET101</p>
        <p>
          YOU HAVE ANY QUESTIONS?{' '}
          <Link href="/contact" passHref>
            <span className="contact-link">CONTACT</span>
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
          --button-bg: ${theme === 'light' ? '#3498db' : '#1abc9c'};
          --button-hover-bg: ${theme === 'light' ? '#2980b9' : '#16a085'};
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
          background-color: var(--button-bg);
          color: #fff;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
        }
        .shop-button:hover {
          background-color: var(--button-hover-bg);
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
