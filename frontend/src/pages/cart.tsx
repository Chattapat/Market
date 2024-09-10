import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { useCart } from '../context/cartcontext'; // ใช้ CartContext
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]); // ใช้ประเภทที่เหมาะสมกับสินค้า
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

  // ดึงข้อมูลสินค้าจาก API
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

  // ค้นหารายละเอียดสินค้าจากข้อมูลในตะกร้า
  const cartItemsDetails = cartItems
    .map(cartItem => {
      const item = items.find(item => item.id === cartItem.id);
      return item ? { ...item, quantity: cartItem.quantity } : null;
    })
    .filter(Boolean) as (Product & { quantity: number })[]; // กรอง null ออกและยืนยันชนิดข้อมูล

  // คำนวณยอดรวม
  const totalPrice = cartItemsDetails.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Your Cart
      </Typography>
      <Grid container spacing={4}>
        {cartItemsDetails.map(item => (
          <Grid item xs={12} md={6} key={item.id}>
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
                  ${item.price.toFixed(2)} x {item.quantity}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>

                {/* ปุ่มเพิ่มหรือลดจำนวนสินค้า */}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <IconButton
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity === 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ mx: 2 }}>
                    {item.quantity}
                  </Typography>
                  <IconButton onClick={() => increaseQuantity(item.id)}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Button variant="text" color="secondary" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* แสดงยอดรวมและปุ่ม Checkout */}
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="bold">
          Total: ${totalPrice.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" onClick={clearCart}>
          CHECKOUT
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
