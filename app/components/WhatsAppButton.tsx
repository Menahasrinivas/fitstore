"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"   // 👈 un number
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        z-[9999]
        w-14 h-14
        rounded-full
        bg-green-600
        flex items-center justify-center
        shadow-lg
        hover:bg-green-700
        transition
      "
      aria-label="WhatsApp Chat"
    >
      {/* SIMPLE WHATSAPP ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M12.04 2C6.56 2 2.09 6.47 2.09 11.95c0 1.93.51 3.82 1.48 5.49L2 22l4.74-1.52a9.9 9.9 0 0 0 5.3 1.52h.01c5.48 0 9.95-4.47 9.95-9.95S17.52 2 12.04 2zm5.77 14.37c-.24.67-1.39 1.29-1.93 1.37-.51.08-1.15.11-1.86-.12-.43-.14-.99-.32-1.71-.63-3-1.29-4.96-4.3-5.11-4.5-.14-.2-1.22-1.62-1.22-3.09s.77-2.19 1.05-2.49c.28-.3.61-.38.81-.38h.58c.18 0 .42-.07.66.5.24.58.81 1.99.88 2.14.07.14.11.32.02.51-.09.2-.14.32-.28.5-.14.18-.3.4-.43.53-.14.14-.28.29-.12.57.16.28.72 1.18 1.55 1.91 1.06.94 1.96 1.23 2.24 1.37.28.14.45.12.62-.07.17-.2.71-.82.9-1.1.18-.28.37-.23.61-.14.24.09 1.54.73 1.8.86.26.13.43.2.49.31.06.11.06.67-.18 1.34z" />
      </svg>
    </a>
  );
}
