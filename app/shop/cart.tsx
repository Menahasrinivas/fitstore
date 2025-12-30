"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CartItem = {
  id: number;
  product_name: string;
  price: number;
  qty: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch("http://localhost/fitstore-backend/get-cart.php")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const total = cart.reduce(
  (sum, item) => sum + Number(item.price) * Number(item.qty),
  0
);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Your Cart</h1> 

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <p><b>{item.product_name}</b></p>
          <p>Price: ₹{item.price}</p>
          <p>Qty: {item.qty}</p>
          <hr />
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <Link href="/bill">
        <button style={{ marginTop: "20px" }}>
          Proceed to Bill
        </button>
      </Link>
    </div>
  );
}
