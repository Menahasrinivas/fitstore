import "./globals.css";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
