import {
  ArrowUp,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Patient Care", href: "#patient-care" },
  { label: "Medical Services", href: "#services" },
  { label: "Service Areas", href: "#areas" },
  { label: "How It Works", href: "#process" },
  { label: "About Our Care", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Private Doctor Visit",
  "Hotel & Villa Doctor",
  "Home Healthcare",
  "Urgent Medical Assistance",
  "IV Therapy & Hydration",
  "Blood Tests",
  "Prescription Support",
  "Medical Transport",
];

const areas = [
  "Kalkan",
  "Kaş",
  "Patara",
  "Kaputaş",
  "Kalamar",
  "Kışla",
  "İslamlar",
  "Üzümlü",
];

export default function Footer() {
  return (
    <footer className="bg-[#FF2800] pb-20 text-white md:pb-0">
      <div className="container-premium">
        <div className="grid gap-12 border-b border-white/25 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.75fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center bg-white text-[#FF2800]">
                <Stethoscope size={27} />
              </span>

              <span>
                <span className="block text-xl font-black tracking-[-0.04em]">
                  KALKAN DOCTOR
                </span>

                <span className="mt-1 block text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/70">
                  Private Medical Service
                </span>
              </span>
            </a>

            <p className="mt-7 max-w-md text-sm font-medium leading-7 text-white/70">
              English-speaking private medical assistance for tourists,
              residents and families throughout Kalkan, Kaş, Patara, Kaputaş
              and surrounding locations.
            </p>

            <div className="mt-7 space-y-4">
              <a
                href="tel:+905519354800"
                className="flex items-center gap-3 text-sm font-bold text-white/80 transition hover:text-white"
              >
                <Phone size={17} />
                +90 551 935 48 00
              </a>

              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-bold text-white/80 transition hover:text-white"
              >
                <MessageCircle size={17} />
                WhatsApp Medical Team
              </a>

              <p className="flex items-start gap-3 text-sm font-bold leading-6 text-white/80">
                <MapPin size={17} className="mt-1 shrink-0" />
                Kalkan, Kaş, Patara, Kaputaş and surrounding areas
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Quick Links
            </h2>

            <nav className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-bold text-white/65 transition hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Services
            </h2>

            <div className="mt-6 space-y-3">
              {serviceLinks.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-sm font-bold text-white/65 transition hover:translate-x-1 hover:text-white"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Service Areas
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <a
                  key={area}
                  href="#areas"
                  className="text-sm font-bold text-white/65 transition hover:text-white"
                >
                  {area}
                </a>
              ))}
            </div>

            <div className="mt-8 border-2 border-white bg-white p-5 text-slate-950">
              <div className="flex items-center gap-3">
                <Clock3 size={19} className="text-[#FF2800]" />

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#E52300]">
                    Availability
                  </p>

                  <p className="mt-1 font-black">Day and Night</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-7 text-xs font-semibold text-white/65 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p>© 2026 Kalkan Doctor. All rights reserved.</p>

            <p className="flex items-center gap-2">
              <ShieldCheck size={14} />
              Private and confidential communication
            </p>
          </div>

          <div className="flex items-center gap-5">
            <p>
              For life-threatening emergencies, call{" "}
              <a
                href="tel:112"
                className="border-b border-white font-black text-white"
              >
                112
              </a>
            </p>

            <a
              href="#home"
              className="grid h-10 w-10 place-items-center border-2 border-white bg-white text-[#FF2800] transition hover:bg-[#FFF6F3]"
              aria-label="Back to top"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}