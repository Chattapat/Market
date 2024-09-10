import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define CartItem interface
interface CartItem {
  id: number;
  quantity: number;
}

// Define CartContextType interface
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// Create CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap around children components
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add item to cart or increase its quantity if already exists
  const addToCart = (id: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success('Item added to cart');
      return [...prevItems, { id, quantity: 1 }];
    });
  };

  // Increase item quantity
  const increaseQuantity = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast.info('Quantity increased');
  };

  // Decrease item quantity, but not lower than 1
  const decreaseQuantity = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
    toast.info('Quantity decreased');
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast.warn('Item removed from cart');
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
    toast.info('Cart cleared');
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
