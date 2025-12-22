"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[50vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
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
            Contact <span className="text-green-500">FitStore</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-200">
            Get in touch with us for training programs, products, or support.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO + FORM ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-6">
              Let’s <span className="text-green-600">Connect</span>
            </h2>

            <p className="text-gray-600 mb-6">
              Have questions about gym training, fitness programs, or our
              products? Reach out to us — our team is happy to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <p>
                  FitStore Gym & Fitness<br />
                  London, United Kingdom
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <p>+44 9876 543210</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <p>support@fitstore.com</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">⏰</span>
                <p>
                  Mon – Sat : 6:00 AM – 10:00 PM<br />
                  Sunday : Closed
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-2xl shadow p-8"
          >
            <h3 className="text-xl font-semibold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        data-aos="zoom-in"
        className="bg-green-700 text-white py-16 text-center"
      >
        <h2 className="text-4xl font-bold">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="mt-3">
          Join our gym programs or shop premium fitness products today.
        </p>
        <button className="mt-6 bg-black px-8 py-3 rounded-lg">
          Join Now
        </button>
      </section>

    </main>
  );
}
