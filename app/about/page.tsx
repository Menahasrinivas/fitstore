"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="text-gray-800">
       

      {/* ================= HERO ================= */}
      <section
        className="relative h-[70vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div
          data-aos="fade-up"
          className="relative z-10 max-w-7xl mx-auto px-6 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-green-500">FitStore</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-200">
            Where professional gym training meets premium fitness products.
          </p>
        </div>
      </section>

      {/* ================= TRAINING SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">
              Professional <span className="text-green-600">Gym Training</span>
            </h2>
            <p className="text-gray-600 mb-4">
              At FitStore, we focus on real fitness results through structured
              gym training programs guided by certified trainers.
            </p>
            <p className="text-gray-600">
              Whether your goal is weight loss, muscle building, or strength
              improvement — our programs are designed to deliver results.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="rounded-2xl overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div
            data-aos="zoom-in"
            className="rounded-2xl overflow-hidden group"
          >
            <img
              src="https://media.istockphoto.com/id/2238372663/photo/different-sport-equipment-on-artificial-grass-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=Da3mecu7oh6NW875g9uM3WRJcOW55JsKT2AKwjcvED0="
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4">
              Premium <span className="text-green-600">Fitness Products</span>
            </h2>
            <p className="text-gray-600 mb-4">
              We sell only trusted supplements, gym accessories, and fitness
              essentials that support your training journey.
            </p>
            <p className="text-gray-600">
              Every product is selected to complement your workouts and help
              you recover, perform, and grow stronger.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY FITSTORE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose <span className="text-green-600">FitStore?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Certified Trainers",
              desc: "Experienced professionals guiding every workout.",
              icon: "🏋️",
            },
            {
              title: "Result-Oriented Programs",
              desc: "Training plans focused on visible transformation.",
              icon: "🔥",
            },
            {
              title: "Trusted Products",
              desc: "Premium supplements & accessories you can rely on.",
              icon: "🛡️",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
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
    Start Your Fitness Transformation
  </h2>

  <p className="mt-3">
    Join our gym programs and power your journey with premium products.
  </p>

  {/* JOIN NOW → WHATSAPP AUTO MESSAGE */}
  <a
    href="https://wa.me/918144405577?text=Hello%20FitStore%20%F0%9F%91%8B%0AI%20am%20interested%20in%20joining%20your%20gym%20training%20programs.%0APlease%20share%20details%20about%20packages%2C%20timings%20and%20offers.%20%F0%9F%92%AA"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="mt-6 bg-black px-8 py-3 rounded-lg hover:bg-gray-900 transition">
      Join Now
    </button>
  </a>
</section>


    </main>
  );
}
