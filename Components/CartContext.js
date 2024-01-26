// CartContext.js

import React, { createContext, useReducer, useContext } from 'react';
import cartReducer from './CartReducer';

const CartContext = createContext();

const initialState = {
  cartItems: [],
  // Add more cart-related state if needed
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...product,
        selectedQuantity: 1,
      },
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        ...product,
      },
    });
  };

  const updateQuantity = (product, selectedQuantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        ...product,
        selectedQuantity,
      },
    });
  };

  const cartTotal = state.cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        setCartItems: dispatch, // Make sure setCartItems is defined correctly
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
