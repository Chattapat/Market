import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useCart } from '../context/cartcontext'; // ใช้ CartContext

const Shop: React.FC = () => {
  const [items, setItems] = useState<any[]>([]); // ใช้ any[] หรือกำหนดประเภทสำหรับรายการสินค้า
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart(); // ดึงฟังก์ชันจาก CartContext

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products'); // URL ของ API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data.products); // สมมติว่า API ส่งข้อมูลในรูปแบบ { products: [...] }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container sx={{ mt: 5, p: 3, boxShadow: 3 }}>
      <Grid container spacing={4}>
        {items.map(({ id, name, imgUrl, price }) => (
          <Grid item xs={12} md={4} key={id}>
            <Card>
              <CardMedia component="img" height="200" image={imgUrl} alt={name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{name}</Typography>
                <Typography variant="body1" color="textSecondary">${price.toFixed(2)}</Typography>
                <Button variant="contained" color="primary" onClick={() => addToCart(id)}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
