import React from 'react';
import { Box, Button, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { items } from '../data/items'; // นำเข้าข้อมูลสินค้า
import { useCart } from '../context/cartcontext'; // ใช้ CartContext

const Shop: React.FC = () => {
  const { addToCart } = useCart(); // ดึงฟังก์ชันจาก CartContext

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
