'use client';

import React, { PropsWithChildren, createContext, useCallback, useEffect, useState } from 'react';
import { CartProduct } from '@/types/cart';

export const LOCAL_STORAGE_CART_KEY = 'LOCAL_STORAGE_CART';

type CartContextType = {
  cartItems: CartProduct[];
  addToCart: (newItem: CartProduct) => void;
  removeFromCart: (uuid: string) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const getCart = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY) ?? '[]') as CartProduct[];

const LocalStorageCartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const save = useCallback((cart: CartProduct[]) => {
    setCartItems(cart);
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
  }, []);

  const addToCart = useCallback(
    (newItem: CartProduct) => {
      const newCart = [...cartItems, newItem];
      save(newCart);
    },
    [cartItems, save]
  );

  const removeFromCart = useCallback(
    (uuid: string) => {
      const newCart = cartItems.filter((product) => product.uuid !== uuid);
      save(newCart);
    },
    [cartItems, save]
  );

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

export default LocalStorageCartProvider;
