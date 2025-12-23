"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function ProductsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { addToCart } = useCart();

  const products = [
    {
      name: "Gold Standard Whey Protein",
      price: "₹845.99",
      img: "https://m.media-amazon.com/images/I/71f+UBXh2vL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Mass Gainer",
      price: "₹639.99",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    },
    {
      name: "Creatine Monohydrate",
      price: "₹524.99",
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
    },
    {
      name: "Hex Dumbbells Set",
      price: "₹989.99",
      img: "https://images.unsplash.com/photo-1648659125396-5bf148702e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGR1bWJiZWxsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Training Gloves",
      price: "₹419.99",
      img: "https://plus.unsplash.com/premium_photo-1675803775295-40710e76825b",
    },
    {
      name: "Vitamin Supplements",
      price: "₹629.99",
      img: "https://images.unsplash.com/photo-1627467959547-8e44da7aa00a",
    },
  ];

  return (
    <main className="text-gray-800">

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {products.map((product, i) => (
            <div
              key={product.name}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">
                  {product.name}
                </h3>

                <p className="text-green-600 font-bold mb-4">
                  {product.price}
                </p>

                <div className="flex gap-3">

                  {/* ADD TO CART */}
                  <button
                    onClick={() => {
                      addToCart({
                        name: product.name,
                        price: product.price,
                        img: product.img,
                        qty: 1,
                      });
                      alert("Added to cart 🛒");
                    }}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Add to Cart
                  </button>

                  {/* BUY NOW → DEALS / WHATSAPP LATER */}
                  <Link
                    href="/deals"
                    className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white transition text-center"
                  >
                    Buy Now
                  </Link>

                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
