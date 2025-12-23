"use client";

import { useEffect } from "react";
import Link from "next/link";
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
        <a
    href="https://wa.me/918144405577?text=Hello%20FitStore%20%F0%9F%91%8B%0AI%20am%20interested%20in%20joining%20your%20gym%20training%20programs.%0APlease%20share%20details%20about%20packages%2C%20timings%20and%20offers.%20%F0%9F%92%AA"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition cursor-pointer"
  >
    Join Now
  </a>
        
       <Link
    href="/shop"
    className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
  >
    Shop Now
  </Link>
  
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

{/* ================= GYM TRAINING VIDEO ================= */}
{/* <section className="max-w-5xl mx-auto px-6 py-20">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold">
      Watch Our <span className="text-green-600">Training in Action</span>
    </h2>
    <p className="mt-3 text-gray-600">
      Real workouts, expert trainers, real results.
    </p>
  </div>

  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/v=fvFQU6NvJo8"
      title="Gym Training Video"
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section> */}



{/* ================= OFFERS & DEALS CTA ================= */}
<section className="bg-gray-100 py-10">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <div
      data-aos="fade-up"
      className="text-center mb-14"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Exclusive <span className="text-green-600">Offers for You</span>
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Special training programs and product deals crafted to help you
        achieve faster fitness results.
      </p>
    </div>

    {/* OFFER CARDS */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* TRAINING OFFER */}
      <a
        href="/training"
        data-aos="fade-right"
        className="
          group relative rounded-2xl overflow-hidden
          shadow hover:shadow-xl transition
        "
      >
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
          className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
          <span className="bg-green-600 w-fit px-4 py-1 rounded-full text-sm mb-3">
            Training Offer
          </span>

          <h3 className="text-2xl font-bold mb-2">
            Save Big on Gym Training
          </h3>

          <p className="text-gray-200 mb-4">
            Join our professional training programs with exclusive discounts.
          </p>

          <span className="inline-block bg-white text-black px-5 py-2 rounded-lg font-medium w-fit">
            View Training Deals →
          </span>
        </div>
      </a>

      {/* PRODUCT OFFER */}
      <a
        href="/deals"
        data-aos="fade-left"
        className="
          group relative rounded-2xl overflow-hidden
          shadow hover:shadow-xl transition
        "
      >
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
          className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
          <span className="bg-green-600 w-fit px-4 py-1 rounded-full text-sm mb-3">
            Product Offer
          </span>

          <h3 className="text-2xl font-bold mb-2">
            Flat Discounts on Supplements
          </h3>

          <p className="text-gray-200 mb-4">
            Premium whey, accessories & combos at best prices.
          </p>

          <span className="inline-block bg-white text-black px-5 py-2 rounded-lg font-medium w-fit">
            View Product Deals →
          </span>
        </div>
      </a>

    </div>
  </div>
</section>


{/* ================= GYM SERVICES ================= */}
<section className="bg-gray-100 py-10">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <div data-aos="fade-up" className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Our <span className="text-green-600">Training Programs</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Transform your body with expert-led training programs designed
        for all fitness levels.
      </p>
    </div>

    {/* SERVICES GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* SERVICE 1 */}
      <div
        data-aos="fade-up"
        className="bg-white rounded-2xl overflow-hidden shadow
                   hover:shadow-xl transition duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Personal Training
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            One-on-one training sessions with certified trainers to
            achieve faster results.
          </p>
         <Link href="/training">
  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
    Enroll Now
  </button>
</Link>

        </div>
      </div>

      {/* SERVICE 2 */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-white rounded-2xl overflow-hidden shadow
                   hover:shadow-xl transition duration-300"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1661692331753-9f98cbbb8d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Weight Loss Program
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Fat-burning workouts combined with diet guidance for
            sustainable weight loss.
          </p>
         <Link href="/training">
  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
    Join program
  </button>
</Link>

        </div>
      </div>

      {/* SERVICE 3 */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-white rounded-2xl overflow-hidden shadow
                   hover:shadow-xl transition duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Muscle Building
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Structured strength training plans focused on lean muscle
            growth and power.
          </p>
        <Link href="/training">
  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
    Start Training
  </button>
</Link>

        </div>
      </div>

 {/* SERVICE 4 – MEN'S COMPETITION TRAINING */}
  <div
    data-aos="fade-up"
    data-aos-delay="300"
    className="bg-white rounded-2xl overflow-hidden shadow
               hover:shadow-xl transition duration-300"
  >
    <img
      src="https://media.istockphoto.com/id/465005814/photo/young-man-performing-front-double-biceps-pose.jpg?s=612x612&w=0&k=20&c=iBtLNuTrY6dnRSjB4H0sKDHX2iu_6DoUeUnnMVjzWOc="
      className="h-56 w-full object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">
        Men’s Competition Training
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Advanced bodybuilding & strength training for competitions
        and stage preparation.
      </p>
     <Link href="/training">
  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
    Train For Competition
  </button>
</Link>

    </div>
  </div>

  {/* SERVICE 5 – KIDS FITNESS */}
  <div
    data-aos="fade-up"
    data-aos-delay="400"
    className="bg-white rounded-2xl overflow-hidden shadow
               hover:shadow-xl transition duration-300"
  >
    <img
      src="https://media.istockphoto.com/id/1188433175/photo/happy-father-looking-at-cheerful-son-and-exercising-with-dumbbells.webp?a=1&b=1&s=612x612&w=0&k=20&c=jjxfWQl3-IgvdE-8kEN9IZU01pJfnpwnMiHZYSv9vMA="
      className="h-56 w-full object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">
        Kids Fitness Training
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Fun, safe and guided fitness programs to build strength,
        discipline and confidence in kids.
      </p>
     <Link href="/training">
  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
    Enroll Kids
  </button>
</Link>

    </div>
  </div>

{/* SERVICE 6 – SENIOR CITIZEN FITNESS */}
<div
  data-aos="fade-up"
  data-aos-delay="500"
  className="bg-white rounded-2xl overflow-hidden shadow
             hover:shadow-xl transition duration-300"
>
  <img
    src="https://media.istockphoto.com/id/1427218939/photo/men-and-woman-cycling-at-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=ycarHxg1VO77iIEaIYLycBLygu7etPLLrYkdHCe4l1w="
    className="h-56 w-full object-cover"
    alt="Senior Citizen Fitness Training"
  />
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">
      Senior Citizen Fitness (40+/50+)
    </h3>
    <p className="text-gray-600 text-sm mb-4">
      Gentle and guided workouts focusing on joint mobility, light strength,
      posture correction, and back pain relief — designed for safe,
      long-term health.
    </p>
    <Link href="/training">
  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
    Join Wellness Program
  </button>
</Link>
  </div>
</div>


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
      {
        name: "Protein",
        img: "https://media.istockphoto.com/id/671922668/photo/young-muscular-man-drinking-a-protein-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=icmrGRsTHs2Tuy4YdADM4RDc3puFgcXbzhjhr7oEVIc=",
      },
      {
        name: "Accessories",
        img: "https://media.istockphoto.com/id/1457722390/photo/gym-and-workout-equipments-in-fitness-center.webp?a=1&b=1&s=612x612&w=0&k=20&c=FEuJF9c59nZkTI7UcgUHUmt_cqUwyeypack8JZwUo98=",
      },
      {
        name: "Apparel",
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      },
      {
        name: "Vitamins",
        img: "https://images.unsplash.com/photo-1627467959547-8e44da7aa00a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpdGFtaW5zfGVufDB8fDB8fHww",
      },
    ].map((cat, i) => (
      <Link
        key={cat.name}
        href="/products"
        className="block"
      >
        <div
          data-aos="fade-up"
          data-aos-delay={i * 100}
          className="relative rounded-xl overflow-hidden group cursor-pointer"
        >
          <img
            src={cat.img}
            className="h-64 w-full object-cover group-hover:scale-105 transition"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4">
            <h3 className="text-white text-xl font-semibold">
              {cat.name}
            </h3>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>


      {/* ================= FLASH DEALS ================= */}
     <section className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
    
    <div data-aos="fade-right" className="bg-black text-white p-10 rounded-xl">
      <h3 className="text-3xl font-bold">50% OFF</h3>
      <p className="mt-2">On all running gear</p>

      {/* CLAIM OFFER → DEALS PAGE */}
      <Link href="/deals">
        <button className="mt-4 bg-green-600 px-5 py-2 rounded">
          Claim Offer
        </button>
      </Link>
    </div>

    <div data-aos="fade-left" className="bg-green-700 text-white p-10 rounded-xl">
      <h3 className="text-3xl font-bold">Best Seller</h3>
      <p className="mt-2">Buy Whey Supplements</p>

      {/* SHOP NOW → PRODUCTS (/shop) PAGE */}
      <Link href="/shop">
        <button className="mt-4 bg-black px-5 py-2 rounded">
          Shop Now
        </button>
      </Link>
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
        price: "₹345.99",
        img: "https://m.media-amazon.com/images/I/71f+UBXh2vL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        name: "Hex Dumbbells Set",
        price: "₹989.99",
        img: "https://media.istockphoto.com/id/2218484842/photo/angled-close-up-of-hex-dumbbells-on-a-gym-rack-focusing-on-metal-grip-texture-and-10kg-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=0XwnWG-qnG2NEcxt0Hf67si36Aojj4-rHPq2x3clGH8=",
      },
      {
        name: "Training Gloves",
        price: "₹119.99",
        img: "https://media.istockphoto.com/id/964979858/photo/cycling-gloves-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=1hTfQPcMWbof08jbAzS6vz81C8_oOW8aNlcexEPcCMI=",
      },
      {
        name: "Vitamin Supplements",
        price: "₹299.99",
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
        <Link href="/shop">
        <button className="mt-6 bg-black px-8 py-3 rounded-lg">
          Explore Products
        </button>
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      {/* <footer data-aos="fade-up" className="bg-white border-t py-12">
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
      </footer> */}

    </main>
  );
}
