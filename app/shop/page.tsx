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
      id: 1,
      name: "Gold Standard Whey Protein",
      price: 845.99,
      img: "https://m.media-amazon.com/images/I/71f+UBXh2vL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "Mass Gainer",
      price: 639.99,
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    },
    {
      id: 3,
      name: "Creatine Monohydrate",
      price: 524.99,
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
    },
    {
      id: 4,
      name: "Hex Dumbbells Set",
      price: 989.99,
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
  ];

  return (
    <main className="text-gray-800">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {products.map((product, i) => (
            <div
              key={product.id}
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
                  ₹{product.price}
                </p>

                <div className="flex gap-3">

                  {/* ✅ ADD TO CART (FIXED) */}
                  <button
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    onClick={async () => {
                      /* 1️⃣ BACKEND */
                      await fetch(
                        "http://localhost/fitstore-backend/add-to-cart.php",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            name: product.name,
                            price: product.price,
                            qty: 1,
                          }),
                        }
                      );

                      /* 2️⃣ FRONTEND STATE (🔥 MOST IMPORTANT) */
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        img: product.img,
                        qty: 1,
                      });
                    }}
                  >
                    Add to Cart
                  </button>

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
