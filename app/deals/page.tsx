"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function DealsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const deals = [
    {
      title: "Protein Power Deal",
      offer: "Flat 30% OFF",
      desc: "On all Whey & Mass Gainers",
      price: "From £29.99",
      badge: "HOT",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    },
    {
      title: "Workout Essentials",
      offer: "Buy 1 Get 1",
      desc: "On Gloves & Gym Accessories",
      price: "Limited Time",
      badge: "B1G1",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    },
    {
      title: "Transformation Pack",
      offer: "Save ₹50",
      desc: "Training + Supplements Combo",
      price: "Best Value",
      badge: "BEST",
      img: "https://images.unsplash.com/photo-1734668487893-d686f3c8d0cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bSUyMFRyYW5zZm9ybWF0aW9uJTIwUGFja3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <main className="text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[60vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')",
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
            Exclusive <span className="text-green-500">Deals & Offers</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-200">
            Premium fitness deals designed to maximize your results and savings.
          </p>
        </div>
      </section>

      {/* ================= DEALS GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div data-aos="fade-up" className="text-center mb-14">
          <h2 className="text-3xl font-bold">
            Today’s <span className="text-green-600">Top Offers</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Grab the best deals before they’re gone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {deals.map((deal, i) => (
            <div
              key={`${deal.title}-${i}`}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition relative"
            >
              {/* BADGE */}
              <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                {deal.badge}
              </span>

              <div className="overflow-hidden">
                <img
                  src={deal.img}
                  alt={deal.title}
                  className="h-56 w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {deal.title}
                </h3>

                <p className="text-green-600 font-bold text-lg">
                  {deal.offer}
                </p>

                <p className="text-gray-600 text-sm mt-1">
                  {deal.desc}
                </p>

                <p className="mt-3 font-medium">
                  {deal.price}
                </p>

                <Link
                  href="/shop"
                  className="block mt-5 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Claim Offer
                </Link>
              </div>
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
          Don’t Miss These Deals
        </h2>
        <p className="mt-3">
          Limited-time offers on training programs and fitness products.
        </p>

        <Link
          href="/shop"
          className="inline-block mt-6 bg-black px-8 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          Shop Deals Now
        </Link>
      </section>

    </main>
  );
}
