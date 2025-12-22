"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products = [
    {
      name: "Gold Standard Whey Protein",
      price: "£45.99",
      img: "https://m.media-amazon.com/images/I/71f+UBXh2vL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Mass Gainer",
      price: "£39.99",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    },
    {
      name: "Creatine Monohydrate",
      price: "£24.99",
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
    },
    {
      name: "Hex Dumbbells Set",
      price: "£89.99",
      img: "https://media.istockphoto.com/id/855984248/photo/tight-isometric-grid-of-black-dumbells.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z4VyO2YQeDGi1Xnk2aC3j71biBLv__OwGmRwn7Uy0Ak=",
    },
    {
      name: "Training Gloves",
      price: "£19.99",
      img: "https://plus.unsplash.com/premium_photo-1675803775295-40710e76825b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwVHJhaW5pbmclMjBnbG92ZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Vitamin Supplements",
      price: "£29.99",
      img: "https://images.unsplash.com/photo-1627467959547-8e44da7aa00a",
    },
  ];

  return (
    <main className="text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[60vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div
          data-aos="fade-up"
          className="relative z-10 max-w-7xl mx-auto px-6 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Fitness <span className="text-green-500">Products</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-200">
            Premium supplements and gym accessories to power your training.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div
          data-aos="fade-up"
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">
            Our <span className="text-green-600">Best Sellers</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Trusted by athletes and fitness professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {products.map((product, i) => (
            <div
              key={product.name}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-56 w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">
                  {product.name}
                </h3>
                <p className="text-green-600 font-bold mb-4">
                  {product.price}
                </p>

                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                  <button className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

          {[
            { icon: "🛡️", text: "100% Authentic Products" },
            { icon: "🚚", text: "Fast UK Delivery" },
            { icon: "💳", text: "Secure Payments" },
            { icon: "🔄", text: "Easy Returns" },
          ].map((item, i) => (
            <div
              key={item.text}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        data-aos="zoom-in"
        className="bg-green-700 text-white py-16 text-center"
      >
        <h2 className="text-4xl font-bold">
          Fuel Your Fitness Journey
        </h2>
        <p className="mt-3">
          Train harder with supplements trusted by professionals.
        </p>
        <button className="mt-6 bg-black px-8 py-3 rounded-lg">
          Shop Now
        </button>
      </section>

    </main>
  );
}
