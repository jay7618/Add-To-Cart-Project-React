import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // --- Auth State ---
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('shopvibe_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    const newUser = { name: email.split('@')[0], email };
    setUser(newUser);
    localStorage.setItem('shopvibe_user', JSON.stringify(newUser));
    return true;
  };

  const signup = (name, email, password) => {
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem('shopvibe_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shopvibe_user');
  };

  // --- Cart State ---
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart(prevCart => 
      prevCart.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0) // Remove item if quantity drops below 1
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <AppContext.Provider value={{ 
      user, login, signup, logout, 
      cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal 
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AppContext);
  return { user: context.user, login: context.login, signup: context.signup, logout: context.logout };
};

export const useCart = () => {
  const context = useContext(AppContext);
  return { 
    cart: context.cart, 
    addToCart: context.addToCart, 
    removeFromCart: context.removeFromCart, 
    updateQuantity: context.updateQuantity, 
    clearCart: context.clearCart, 
    cartCount: context.cartCount, 
    cartTotal: context.cartTotal 
  };
};