"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Home",
    "Categories",
    "Deals",
    "Products",
    "Contact",
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl sm:text-2xl font-bold text-green-600">
          FITSTORE
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          {menuItems.map((item) => (
            <a key={item} href="#" className="hover:text-green-600">
              {item}
            </a>
          ))}
        </nav>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`h-0.5 w-6 bg-black transition ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-6 gap-4 font-medium text-gray-700">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="hover:text-green-600"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
