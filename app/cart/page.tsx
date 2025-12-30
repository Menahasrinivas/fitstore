"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 mb-4">Your cart is empty 🛒</p>
          <Link
            href="/shop"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-bold">
                    ₹{item.price * item.qty}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="mt-8 border-t pt-6 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">
                Total: ₹{grandTotal}
              </p>
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:underline mt-2"
              >
                Clear Cart
              </button>
            </div>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
