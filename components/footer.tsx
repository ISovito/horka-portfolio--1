import React from "react";

export default function Footer() {

  const dateVar = new Date(2024, 0, 22, 20).getTime() 
  const currentTime = new Date().getTime()

  const createdAgo = Math.round(Math.abs(dateVar - currentTime) / 3600000)

  return (
    <footer className="mb-6 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Horka. All rights reserved.
      </small>
      <p className="text-xs mb-2">
        <span className="font-semibold">Website built with:</span>React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <p>
        This site has been published <span className="font-bold"> {createdAgo} h</span> ago
      </p>
    </footer>
  );
}
