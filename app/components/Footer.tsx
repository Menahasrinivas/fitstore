"use client";

export default function Footer() {
  return (
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

      <p className="text-center text-sm mt-6">
        © 2025 FitStore Inc.
      </p>
    </footer>
  );
}
