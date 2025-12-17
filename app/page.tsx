"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="w-full text-gray-800">

      {/* ================= NAVBAR ================= */}
      <header data-aos="fade-down" className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-600">FITSTORE</h1>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
          </nav>

          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search protein, gear..."
              className="hidden md:block border px-4 py-2 rounded-lg"
            />
            <span>🛒</span>
            <span>👤</span>
          </div>
        </div>
      </header>

      {/* ================= HERO (FULL BG IMAGE) ================= */}
<section
  className="relative h-[90vh] flex items-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <div data-aos="fade-right" className="max-w-xl text-white">
      <span className="inline-block bg-green-600 px-4 py-1 rounded-full text-sm">
        NEW COLLECTION
      </span>

      <h1 className="text-5xl font-bold mt-4 leading-tight">
        Fuel Your <span className="text-green-500">Fitness Journey</span>
      </h1>

      <p className="mt-4 text-gray-200">
        Premium supplements and pro-grade accessories for peak performance.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
          Shop Now
        </button>
        <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
          View Deals
        </button>
      </div>
    </div>
  </div>
</section>


      {/* ================= TRUST BADGES ================= */}
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {[
      { icon: "✅", title: "Authentic Products", desc: "100% genuine items" },
      { icon: "🚚", title: "Fast Delivery", desc: "Quick & reliable shipping" },
      { icon: "🏆", title: "Top Rated", desc: "Trusted by experts" },
      { icon: "🔒", title: "Secure Payment", desc: "Safe checkout" },
    ].map((item, i) => (
      <div
        key={item.title}
        data-aos="fade-up"
        data-aos-delay={i * 100}
        className="bg-green-50 border border-green-100 rounded-xl p-6
                   hover:bg-green-100 transition duration-300 hover:-translate-y-1"
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
      </div>
    ))}

  </div>
</section>


      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-8">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Protein", img: "https://media.istockphoto.com/id/671922668/photo/young-muscular-man-drinking-a-protein-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=icmrGRsTHs2Tuy4YdADM4RDc3puFgcXbzhjhr7oEVIc=" },
            { name: "Accessories", img: "https://media.istockphoto.com/id/1457722390/photo/gym-and-workout-equipments-in-fitness-center.webp?a=1&b=1&s=612x612&w=0&k=20&c=FEuJF9c59nZkTI7UcgUHUmt_cqUwyeypack8JZwUo98=" },
            { name: "Apparel", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
            { name: "Vitamins", img: "https://images.unsplash.com/photo-1627467959547-8e44da7aa00a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpdGFtaW5zfGVufDB8fDB8fHww" },
          ].map((cat, i) => (
            <div
              key={cat.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative rounded-xl overflow-hidden group"
            >
              <img
                src={cat.img}
                className="h-64 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FLASH DEALS ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          
          <div data-aos="fade-right" className="bg-black text-white p-10 rounded-xl">
            <h3 className="text-3xl font-bold">50% OFF</h3>
            <p className="mt-2">On all running gear</p>
            <button className="mt-4 bg-green-600 px-5 py-2 rounded">
              Claim Offer
            </button>
          </div>

          <div data-aos="fade-left" className="bg-green-700 text-white p-10 rounded-xl">
            <h3 className="text-3xl font-bold">Best Seller</h3>
            <p className="mt-2">Buy Whey Supplements</p>
            <button className="mt-4 bg-black px-5 py-2 rounded">
              Shop Now
            </button>
          </div>

        </div>
      </section>

     {/* ================= TRENDING PRODUCTS ================= */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <h2 data-aos="fade-up" className="text-3xl font-bold mb-8">
    Trending Now
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    {[
      {
        name: "Gold Standard Whey",
        price: "$45.99",
        img: "https://m.media-amazon.com/images/I/71f+UBXh2vL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        name: "Hex Dumbbells Set",
        price: "$89.99",
        img: "https://media.istockphoto.com/id/2218484842/photo/angled-close-up-of-hex-dumbbells-on-a-gym-rack-focusing-on-metal-grip-texture-and-10kg-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=0XwnWG-qnG2NEcxt0Hf67si36Aojj4-rHPq2x3clGH8=",
      },
      {
        name: "Training Gloves",
        price: "$19.99",
        img: "https://media.istockphoto.com/id/964979858/photo/cycling-gloves-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=1hTfQPcMWbof08jbAzS6vz81C8_oOW8aNlcexEPcCMI=",
      },
      {
        name: "Vitamin Supplements",
        price: "$29.99",
        img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
      },
    ].map((product, i) => (
      <div
        key={product.name}
        data-aos="zoom-in"
        data-aos-delay={i * 100}
        className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
      >
        <img
          src={product.img}
          alt={product.name}
          className="h-48 w-full object-cover rounded-lg"
        />

        <h3 className="mt-4 font-semibold text-lg">
          {product.name}
        </h3>

        <p className="text-green-600 font-bold mt-1">
          {product.price}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* ================= TESTIMONIALS ================= */}
<section className="bg-green-50 py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2
      data-aos="fade-up"
      className="text-3xl font-bold text-center mb-12"
    >
      What Our Clients Say
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      {[
        {
          name: "Alex Johnson",
          msg: "Quality unmatched. Recovery faster and delivery super quick.",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Priya Sharma",
          msg: "Best fitness products I’ve used so far. Totally worth the price.",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Rahul Verma",
          msg: "Great customer support and genuine supplements. Highly recommended!",
          rating: "⭐⭐⭐⭐⭐",
        },
      ].map((item, i) => (
        <div
          key={item.name}
          data-aos="fade-up"
          data-aos-delay={i * 150}
          className="bg-white rounded-xl p-6 shadow-sm
                     hover:shadow-lg transition duration-300"
        >
          <p className="italic text-gray-700">
            “{item.msg}”
          </p>

          <div className="mt-4">
            <p className="font-semibold">{item.name}</p>
            <p className="text-green-600">{item.rating}</p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section
        data-aos="zoom-in"
        className="bg-green-700 text-white py-16 text-center"
      >
        <h2 className="text-4xl font-bold">Start Your Transformation</h2>
        <p className="mt-2">Get 10% off on your first order</p>
        <button className="mt-6 bg-black px-8 py-3 rounded-lg">
          Explore Products
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer data-aos="fade-up" className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold text-green-600">FITSTORE</h3>
            <p className="text-sm mt-2">
              Empowering your fitness journey with premium products.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Shop</h4>
            <p>Protein</p>
            <p>Vitamins</p>
            <p>Gear</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <p>Order Status</p>
            <p>Shipping</p>
            <p>Returns</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>support@fitstore.com</p>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <p className="text-center text-sm mt-6">© 2025 FitStore Inc.</p>
      </footer>

    </main>
  );
}
