"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/page";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  useEffect(() => {
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const target = Number(counter.getAttribute("data-target"));
    let current = 0;

    const update = () => {
      const increment = Math.ceil(target / 80);
      current += increment;

      if (current < target) {
        counter.textContent = current.toString();
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toString();
      }
    };

    update();
  });
}, []);


  return (
    <main className="w-full text-gray-800">

      <Header/>

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
  <div className="absolute inset-0 bg-black/10"></div>

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

{/* ================= TRUST STATS ================= */}
<section className="bg-gray-100 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Title */}
    <div
      className="text-center mb-12 md:mb-16"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        Trusted by the Fitness Community
      </h2>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
        Over a decade of experience delivering quality, results,
        and customer satisfaction.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">

      {[
        { value: 10, suffix: "+", label: "Years Experience" },
        { value: 100, suffix: "+", label: "Batches Trained" },
        { value: 1000, suffix: "+", label: "Happy Clients" },
        { value: 99, suffix: "%", label: "Success Rate" },
      ].map((item, i) => (
        <div
          key={item.label}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          className="
            bg-white rounded-xl sm:rounded-2xl
            p-5 sm:p-6 md:p-10
            shadow hover:shadow-xl
            transition duration-300
          "
        >
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-600">
            <span
              className="count"
              data-target={item.value}
            >
              0
            </span>
            {item.suffix}
          </h3>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-800">
            {item.label}
          </p>
        </div>
      ))}

    </div>
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
