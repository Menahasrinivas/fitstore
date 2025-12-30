"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  // ✅ SAFE calculation (important)
  const totalItems =
    cart && cart.length > 0
      ? cart.reduce((sum: number, item: any) => sum + item.qty, 0)
      : 0;

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
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-green-600">
          FITSTORE
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700">

          {menuItems.map((item) => (
            <Link key={item.label} href={item.path}>
              {item.label}
            </Link>
          ))}

          {/* CART ICON */}
          <Link href="/cart" className="relative">
            <span className="text-2xl">🛒</span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* MOBILE HEADER RIGHT */}
        <div className="md:hidden flex items-center gap-4">
          {/* MOBILE CART */}
          <Link href="/cart" className="relative">
            <span className="text-2xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-black"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                onClick={() => setOpen(false)}
                className="hover:text-green-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
