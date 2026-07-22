"use client";

import { useEffect, useState } from "react";
import {
  Clock3,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Patient Care", href: "#patient-care" },
  { label: "Coverage", href: "#areas" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-red-950 text-white">
          <div className="container-premium flex h-9 items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.12em] sm:text-xs">
            <div className="flex items-center gap-2">
              <Clock3 size={13} className="text-red-300" />
              Medical assistance available 24/7
            </div>

            <div className="hidden items-center gap-5 md:flex">
              <span className="flex items-center gap-2">
                <MapPin size={13} className="text-red-300" />
                Kalkan · Kaş · Patara · Kaputaş
              </span>

              <span className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-red-300" />
                Private medical care
              </span>
            </div>
          </div>
        </div>

        <div className="border-b border-red-950/10 bg-[#ffffff]/95 shadow-[0_12px_40px_rgba(127,29,29,0.08)] backdrop-blur-xl">
          <div className="container-premium flex h-[5.2rem] items-center">
            <a
              href="#home"
              className="flex shrink-0 items-center gap-3 border-r border-red-950/10 pr-5 sm:pr-8"
              onClick={() => setOpen(false)}
            >
              <span className="grid h-11 w-11 place-items-center bg-red-800 text-white">
                <Stethoscope size={23} />
              </span>

              <span>
                <span className="block text-lg font-black tracking-[-0.04em] text-slate-950">
                  KALKAN DOCTOR
                </span>
                <span className="block text-[0.62rem] font-black uppercase tracking-[0.2em] text-red-700">
                  Private Medical Service
                </span>
              </span>
            </a>

            <nav className="mx-auto hidden items-center xl:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b-2 border-transparent px-3 py-7 text-sm font-bold text-slate-700 transition hover:border-red-700 hover:text-red-800"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="ml-auto hidden items-center lg:flex">
              <a
                href="tel:+905519354800"
                className="flex h-[5.2rem] items-center gap-3 border-l border-red-950/10 px-6 text-red-900 transition hover:bg-red-100/60"
              >
                <span className="grid h-9 w-9 place-items-center border border-red-800/20">
                  <Phone size={17} />
                </span>

                <span>
                  <span className="block text-[0.62rem] font-black uppercase tracking-[0.15em] text-slate-500">
                    Call medical team
                  </span>
                  <span className="mt-1 block text-sm font-black">
                    +90 551 935 48 00
                  </span>
                </span>
              </a>

              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[5.2rem] items-center bg-red-800 px-7 text-sm font-black text-white transition hover:bg-red-900"
              >
                Request a Doctor
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="ml-auto grid h-11 w-11 place-items-center border border-red-900/15 text-red-900 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-red-950/35 backdrop-blur-sm transition ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed bottom-0 right-0 top-0 z-40 w-[min(90%,24rem)] bg-[#ffffff] px-6 pb-7 pt-36 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <p className="mb-5 border-b border-red-950/10 pb-4 text-xs font-black uppercase tracking-[0.18em] text-red-700">
          Navigation
        </p>

        <nav className="flex flex-col">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-red-950/10 py-4 font-bold text-slate-900"
            >
              {link.label}
              <span className="text-xs font-black text-red-700">
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-7 grid gap-3">
          <a
            href="tel:+905519354800"
            className="flex items-center justify-center gap-2 border border-red-800/20 px-5 py-4 font-black text-red-900"
          >
            <Phone size={18} />
            Call Now
          </a>

          <a
            href="https://wa.me/905519354800"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-800 px-5 py-4 text-center font-black text-white"
          >
            WhatsApp Medical Team
          </a>
        </div>
      </aside>
    </>
  );
}