"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Training", path: "/training" },
    { label: "Products", path: "/shop" },
    { label: "Deals", path: "/deals" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold text-green-600">FITSTORE</h1>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.path}>
              {item.label}
            </Link>
          ))}

          {/* CART ICON */}
          <div className="relative">
            <span className="text-2xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
        </nav>

        {/* MOBILE */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}
