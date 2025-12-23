"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TrainingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
const handleJoinWhatsApp = (
  plan: string,
  price: string
) => {
  const phoneNumber = "918144405577"; // 👈 your WhatsApp number
  const message = `Hello FitStore 👋
I’m interested in the ${plan} Training Package.%0A
Price: ${price}%0A
Please share batch timings and joining process.`;

  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
};

  return (
    <main className="text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[70vh] flex items-center"
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
            Gym <span className="text-green-500">Training Programs</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-200">
            Expert-led programs designed to transform your body, strength,
            and confidence.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">
              Train with <span className="text-green-600">Professionals</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Our gym training programs are crafted by certified trainers
              focusing on real results, proper form, and long-term fitness.
            </p>
            <p className="text-gray-600">
              Beginner or advanced — we guide you every step of your fitness
              journey.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="rounded-2xl overflow-hidden group"
          >
            <img
              src="https://media.istockphoto.com/id/1956798859/photo/a-personal-trainer-is-showing-a-sportswoman-exercises-with-kettlebell-in-a-gym.jpg?s=612x612&w=0&k=20&c=cgh0iZxnIJlD36Qy0cESU9vinfdUdd1qV8b1Fdsp4EA="
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>


      {/* ================= TRAINING PROGRAMS ================= */}
<section className="max-w-7xl mx-auto px-6 py-20">

  <div data-aos="fade-up" className="text-center mb-20">
    <h2 className="text-3xl md:text-4xl font-bold">
      Our <span className="text-green-600">Training Programs</span>
    </h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Structured training programs designed for all age groups — from kids
      to senior citizens and competitive athletes.
    </p>
  </div>

  <div className="space-y-20">

    {/* 1. Personal Training */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <img
        data-aos="fade-right"
        src="https://media.istockphoto.com/id/1000716358/photo/handsome-model-young-man-workout-in-gym.webp?a=1&s=612x612&w=0&k=20&c=sIBQ_4HTfvABlt93fJxtWtYfvWL-tlDvQ2BPQBhVYRU="
        className="rounded-2xl shadow"
      />
      <div data-aos="fade-left">
        <h3 className="text-2xl font-semibold mb-3">Personal Training</h3>
        <p className="text-gray-600 mb-4">
          One-on-one training with certified trainers focusing on correct
          form, faster results, and injury prevention.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Customized workout plans</li>
          <li>Dedicated personal trainer</li>
          <li>Progress tracking</li>
        </ul>
      </div>
    </div>

    {/* 2. Weight Loss */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right" className="md:order-2">
        <img
          src="https://plus.unsplash.com/premium_photo-1661692331753-9f98cbbb8d05?w=500"
          className="rounded-2xl shadow"
        />
      </div>
      <div data-aos="fade-left" className="md:order-1">
        <h3 className="text-2xl font-semibold mb-3">Weight Loss Program</h3>
        <p className="text-gray-600 mb-4">
          Fat-burn focused workouts combined with diet guidance for
          sustainable and healthy weight loss.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Cardio + strength mix</li>
          <li>Diet & lifestyle guidance</li>
          <li>Visible transformation</li>
        </ul>
      </div>
    </div>

    {/* 3. Muscle Building */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <img
        data-aos="fade-right"
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
        className="rounded-2xl shadow"
      />
      <div data-aos="fade-left">
        <h3 className="text-2xl font-semibold mb-3">Muscle Building</h3>
        <p className="text-gray-600 mb-4">
          Strength-focused training using progressive overload to
          increase lean muscle mass and power.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Hypertrophy training</li>
          <li>Strength programming</li>
          <li>Supplement guidance</li>
        </ul>
      </div>
    </div>

    {/* 4. Men’s Competition */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right" className="md:order-2">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
          className="rounded-2xl shadow"
        />
      </div>
      <div data-aos="fade-left" className="md:order-1">
        <h3 className="text-2xl font-semibold mb-3">
          Men’s Competition Training
        </h3>
        <p className="text-gray-600 mb-4">
          Advanced bodybuilding & strength training designed for
          competitions and stage preparation.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Competition-level workouts</li>
          <li>Peak week planning</li>
          <li>Physique conditioning</li>
        </ul>
      </div>
    </div>

    {/* 5. Kids Fitness */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <img
        data-aos="fade-right"
        src="https://plus.unsplash.com/premium_photo-1661670957144-abe857475c51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxLaWRzJTIwRml0bmVzcyUyMFRyYWluaW5nfGVufDB8fDB8fHww"
        className="rounded-2xl shadow"
      />
      <div data-aos="fade-left">
        <h3 className="text-2xl font-semibold mb-3">Kids Fitness Training</h3>
        <p className="text-gray-600 mb-4">
          Fun, safe and engaging fitness programs for kids to build
          strength, discipline and confidence.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Age-appropriate workouts</li>
          <li>Improves coordination</li>
          <li>Safe supervision</li>
        </ul>
      </div>
    </div>

    {/* 6. Senior Citizen */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right" className="md:order-2">
        <img
          src="https://plus.unsplash.com/premium_photo-1663051137961-58436999593c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxTZW5pb3IlMjBDaXRpemVuJTIwRml0bmVzcyUyMGluJTIwZ3ltfGVufDB8fDB8fHww"
          className="rounded-2xl shadow"
        />
      </div>
      <div data-aos="fade-left" className="md:order-1">
        <h3 className="text-2xl font-semibold mb-3">
          Senior Citizen Fitness (40+/50+)
        </h3>
        <p className="text-gray-600 mb-4">
          Gentle workouts focusing on joint mobility, posture correction
          and back-pain relief for long-term health.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Low-impact exercises</li>
          <li>Joint mobility</li>
          <li>Safe & guided sessions</li>
        </ul>
      </div>
    </div>

  </div>
</section>

{/* JOIN NOW BUTTON – CENTERED */}
<div className="md:col-span-2 flex justify-center  mt-4 mb-16">
  <a
    href="https://wa.me/918144405577?text=Hello%20FitStore%20%F0%9F%91%8B%0AI%20am%20interested%20in%20joining%20the%20Senior%20Citizen%20Fitness%20Program%20(40%2B%2F50%2B).%0APlease%20share%20details%20about%20packages%2C%20timings%20and%20offers.%20%F0%9F%92%AA"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
      Join Now
    </button>
  </a>
</div>

{/* ================= TRAINING PACKAGES & OFFERS ================= */}
<section className="bg-gray-100 py-22">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <div data-aos="fade-up" className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold">
        Training <span className="text-green-600">Packages & Offers</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Flexible plans designed for beginners, athletes, kids and senior citizens.
        Choose a package that fits your fitness goals and schedule.
      </p>
    </div>

   <div className="grid md:grid-cols-3 gap-10">

  {/* MONTHLY */}
  <div
    data-aos="fade-up"
   className="bg-white rounded-2xl border-2 border-green-600
           shadow hover:shadow-xl
           transition-transform duration-300
           hover:scale-105
           p-8 relative"
  >
    <h3 className="text-xl font-semibold mb-3">Monthly</h3>

    <p className="text-4xl font-bold text-green-600 mb-1">₹449</p>
    <p className="text-sm text-gray-500 mb-6">per month</p>

    <ul className="space-y-3 text-gray-600 mb-6">
      <li>✔ Gym access</li>
      <li>✔ Group training</li>
      <li>✔ Flexible timings</li>
      <li>✔ Basic trainer guidance</li>
    </ul>

    <button
  onClick={() => handleJoinWhatsApp("Monthly", "₹449 per month")}
  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
>
  Join Monthly
</button>

  </div>

  {/* QUARTERLY */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="bg-white rounded-2xl border-2 border-green-600
           shadow hover:shadow-xl
           transition-transform duration-300
           hover:scale-105
           p-8 relative"

  >
    <h3 className="text-xl font-semibold mb-3">Quarterly</h3>

    <p className="text-4xl font-bold text-green-600 mb-1">₹1699</p>
    <p className="text-sm text-gray-500 line-through">₹1999</p>
    <p className="text-sm text-green-600 mb-6">Save ₹300</p>

    <ul className="space-y-3 text-gray-600 mb-6">
      <li>✔ All Monthly benefits</li>
      <li>✔ Personal trainer guidance</li>
      <li>✔ Diet & workout plan</li>
      <li>✔ Morning & evening batches</li>
    </ul>

   <button
  onClick={() => handleJoinWhatsApp("Quarterly", "₹1699")}
  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
>
  Join Quarterly
</button>

  </div>

  {/* YEARLY */}
  <div
    data-aos="fade-up"
    data-aos-delay="200"
   className="bg-white rounded-2xl border-2 border-green-600
           shadow hover:shadow-xl
           transition-transform duration-300
           hover:scale-105
           p-8 relative"

  >
    <h3 className="text-xl font-semibold mb-3">Yearly</h3>

    <p className="text-4xl font-bold text-green-600 mb-1">₹5999</p>
    <p className="text-sm text-gray-500 line-through">₹6999</p>
    <p className="text-sm text-green-600 mb-6">Save ₹1000</p>

    <ul className="space-y-3 text-gray-600 mb-6">
      <li>✔ All Quarterly benefits</li>
      <li>✔ Priority trainer support</li>
      <li>✔ Access to all programs</li>
      <li>✔ Free fitness assessment</li>
    </ul>

    <button
  onClick={() => handleJoinWhatsApp("Yearly", "₹5999")}
  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
>
  Join Yearly
</button>

  </div>

</div>


    {/* FLEXIBLE TIMINGS */}
    <div
      data-aos="fade-up"
      className="mt-16 text-center bg-white rounded-2xl p-8 shadow"
    >
      <h4 className="text-xl font-semibold mb-3">
        🕒 Flexible Training Timings
      </h4>
      <p className="text-gray-600">
        Morning batches (5:30 AM – 10:00 AM) & Evening batches
        (4:00 PM – 10:00 PM) available to fit your daily routine.
      </p>
    </div>

  </div>
</section>


      {/* ================= TRAINING PROGRAMS ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-14"
          >
            Our <span className="text-green-600">Programs</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Personal Training",
                desc: "One-on-one sessions with certified trainers for faster transformation.",
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
              },
              {
                title: "Weight Loss Program",
                desc: "Fat-burning workouts combined with diet & lifestyle guidance.",
                img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba",
              },
              {
                title: "Muscle Building",
                desc: "Structured strength training focused on lean muscle growth.",
                img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    className="h-56 w-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.desc}
                  </p>
                  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
                    Join Now
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHY TRAIN WITH US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-12"
        >
          Why Train at <span className="text-green-600">FitStore?</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {[
            { icon: "🏋️", text: "Certified Trainers" },
            { icon: "🔥", text: "Result-Oriented Programs" },
            { icon: "⏱️", text: "Flexible Timings" },
            { icon: "💪", text: "Proven Transformations" },
          ].map((item, i) => (
            <div
              key={item.text}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="font-semibold">{item.text}</p>
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
          Ready to Start Training?
        </h2>
        <p className="mt-3">
          Join our gym programs and transform your lifestyle today.
        </p>
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
