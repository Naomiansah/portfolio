import { useState } from "react";
import { Download, Linkedin } from "lucide-react";
import profile from "../assets/Images/profile.JPG";

// Tailwind CSS required. Works best in a Vite + React setup.
// Drop this component into src/App.jsx and ensure Tailwind is configured.
// Replace "/portrait.jpg" with your actual image path (e.g., /assets/naomi.jpg)

export default function App() {
  const [downloading, setDownloading] = useState(false);

  const circles = [
    {
      label: "Resume",
      href: "#resume",
      bg: "bg-rose-800",
      ring: "ring-rose-300/60",
    },
    {
      label: "Projects",
      href: "#projects",
      bg: "bg-lime-700",
      ring: "ring-lime-300/60",
    },
    {
      label: "Contact",
      href: "#contact",
      bg: "bg-amber-900",
      ring: "ring-amber-300/60",
    },
  ];

  const handleDownload = async () => {
    setDownloading(true);
    // Replace with a real CV path in your public/ directory (e.g., "/Naomi_Ansah_CV.pdf")
    const link = document.createElement("a");
    link.href = "/Naomi_Ansah_CV.pdf";
    link.download = "Naomi_Ansah_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setDownloading(false);
  };

  return (
    <main className="min-h-screen w-full bg-neutral-100 text-neutral-900">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Portrait */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[520px] max-w-full aspect-square rounded-full overflow-hidden shadow-xl ring-8 ring-white/70">
              <img
                src={profile}
                alt="Naomi Ansah portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.95]">
              Hello
            </h1>

            <div>
              <h2 className="text-xl font-semibold mb-2">A Bit About Me</h2>
              <p className="max-w-2xl text-base leading-relaxed text-neutral-700">
                Naomi is a passionate textile designer transitioning into web
                development. With a background in textile design, she brings a
                creative and detail‑oriented approach to coding and digital
                design. She is eager to blend her artistic skills with
                technology to create visually engaging and functional web
                experiences.
              </p>
            </div>

            {/* Three circular links */}
            <div className="flex gap-5">
              {circles.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className={`group w-28 h-28 sm:w-32 sm:h-32 rounded-full ${c.bg} ${c.ring} ring-4 flex items-center justify-center text-white font-medium shadow transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus:ring-8`}
                >
                  <span className="text-sm sm:text-base">{c.label}</span>
                </a>
              ))}
            </div>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 border border-yellow-600 text-yellow-800 px-4 py-2 rounded-md hover:bg-yellow-50 transition-colors disabled:opacity-60"
              disabled={downloading}
            >
              <Download className="size-4" />
              {downloading ? "Preparing CV…" : "Download CV"}
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-neutral-300" />

      {/* Footer / Contact strip */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm uppercase tracking-wide text-neutral-500">
              Phone
            </h3>
            <p className="mt-2 font-medium">0591950446</p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wide text-neutral-500">
              Email
            </h3>
            <p className="mt-2 font-medium">
              <a
                href="mailto:naomiansah2023@gmail.com"
                className="hover:underline"
              >
                naomiansah2023@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wide text-neutral-500">
              Follow me
            </h3>
            <div className="mt-2 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border rounded-full px-3 py-1 hover:bg-neutral-50"
              >
                <Linkedin className="size-4" />
                <span>LinkedIn</span>
              </a>
              {/* Instagram icon placeholder as text glyph */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border rounded-full px-3 py-1 hover:bg-neutral-50"
              >
                <span className="text-lg">⌾</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© 2025 By Naomi Ansah.</p>
          <p>
            Powered and secured by{" "}
            <a className="font-medium hover:underline" href="#">
              Mest Africa
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
