"use client";

import { useEffect, useState } from "react";

type CartItem = {
  id: number;
  product_name: string;
  price: number;
  qty: number;
};

export default function BillPage() {
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
      <h1>🧾 Bill Summary</h1>

      {cart.map((item) => (
        <p key={item.id}>
          {item.product_name} × {item.qty} = ₹{item.price * item.qty}
        </p>
      ))}

      <hr />
      <h2>Grand Total: ₹{total}</h2>

      <button
        style={{ marginTop: "20px" }}
        onClick={() => alert("Order placed 🎉")}
      >
        Place Order
      </button>
    </div>
  );
}
