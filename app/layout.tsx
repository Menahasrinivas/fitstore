import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { CartProvider } from "./context/CartContext";
import type { ReactNode } from "react";

export const metadata = {
  title: "FitStore",
  description: "Fitness products and training store",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* GLOBAL CART STATE */}
        <CartProvider>

          {/* HEADER */}
          <Header />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />

          {/* FLOATING WHATSAPP */}
          <WhatsAppButton />

        </CartProvider>

      </body>
    </html>
  );
}
