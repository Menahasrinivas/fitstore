"use client";

import { createContext, useContext, useEffect, useState } from "react";

/* ================= TYPES ================= */

export type CartItem = {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

/* ================= CONTEXT ================= */

const CartContext = createContext<CartContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  /* 🔁 LOAD CART FROM LOCAL STORAGE */
  useEffect(() => {
    const storedCart = localStorage.getItem("fitstore-cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  /* 💾 SAVE CART TO LOCAL STORAGE */
  useEffect(() => {
    localStorage.setItem("fitstore-cart", JSON.stringify(cart));
  }, [cart]);

  /* ➕ ADD TO CART */
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);

      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  /* ➖ REMOVE ITEM */
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* 🧹 CLEAR CART */
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ================= HOOK ================= */

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
