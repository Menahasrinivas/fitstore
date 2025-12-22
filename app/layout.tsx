import "./globals.css";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* HEADER – ALL PAGES */}
        <Header />

        {/* PAGE CONTENT */}
        <main>
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
