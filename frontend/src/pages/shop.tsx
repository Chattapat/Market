import React from 'react';
import { Box, Button, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { items } from '../data/items';  // นำเข้าข้อมูลสินค้า
import { useCart } from '../context/cartcontext'; // ใช้ CartContext

const Shop: React.FC = () => {
  const { addToCart } = useCart(); // ดึงฟังก์ชันจาก CartContext

  return (
    <Container sx={{ mt: 5, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 3 }}>
      <Grid container spacing={4}>
        {items.map(item => (
          <Grid item xs={12} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.imgUrl}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  ${item.price.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(item.id)}
                >
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
