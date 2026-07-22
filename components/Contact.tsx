import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+90 551 935 48 00",
    href: "tel:+905519354800",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send patient details",
    href: "https://wa.me/905519354800",
  },
  {
    icon: Clock3,
    label: "Availability",
    value: "Day and night",
  },
  {
    icon: MapPin,
    label: "Service Region",
    value: "Kalkan, Kaş, Patara & Kaputaş",
  },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-white py-20 sm:py-28">
        <div className="container-premium">
          <div className="overflow-hidden border border-[#FF2800] bg-[#FF2800] text-white shadow-[0_30px_80px_rgba(255,40,0,0.18)]">
            <div className="grid lg:grid-cols-[0.58fr_0.42fr]">
              <div className="relative overflow-hidden p-7 sm:p-12 lg:p-16">
                <div className="absolute -left-36 -top-36 h-96 w-96 rounded-full border border-white/15" />
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/15" />
                <div className="absolute -bottom-48 right-0 h-[30rem] w-[30rem] rounded-full bg-[#B61C00]/35 blur-3xl" />

                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/75">
                    07 / Contact
                  </p>

                  <h2 className="mt-7 max-w-4xl text-balance text-4xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                    Need medical
                    <span className="block font-light italic text-white">
                      assistance now?
                    </span>
                  </h2>

                  <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/75 sm:text-lg">
                    Contact the medical team and share the patient’s age,
                    symptoms, accommodation name and exact location.
                  </p>

                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://wa.me/905519354800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-16 items-center justify-center gap-3 bg-white px-7 py-4 font-black text-[#E52300] transition hover:bg-[#FFF6F3]"
                    >
                      <MessageCircle size={20} />
                      WhatsApp Medical Team
                      <ArrowRight
                        size={19}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>

                    <a
                      href="tel:+905519354800"
                      className="inline-flex min-h-16 items-center justify-center gap-3 border-2 border-white bg-transparent px-7 py-4 font-black text-white transition hover:bg-white/10"
                    >
                      <Phone size={20} />
                      Call Now
                    </a>
                  </div>

                  <div className="mt-10 flex items-start gap-3 border-t border-white/25 pt-7">
                    <ShieldCheck
                      size={21}
                      className="mt-0.5 shrink-0 text-white"
                    />

                    <p className="max-w-xl text-sm font-medium leading-6 text-white/70">
                      Patient information is handled privately and used only to
                      help arrange appropriate medical assistance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/25 bg-white text-slate-950 lg:border-l lg:border-t-0">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  const content = (
                    <div className="group flex items-center gap-5 border-b border-black/10 p-7 transition hover:bg-[#FFF6F3] sm:p-9">
                      <span className="grid h-12 w-12 shrink-0 place-items-center border-2 border-[#FF2800] bg-white text-[#FF2800] transition group-hover:bg-[#FF2800] group-hover:text-white">
                        <Icon size={21} />
                      </span>

                      <div>
                        <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#E52300]">
                          {detail.label}
                        </p>

                        <p className="mt-2 font-black text-slate-950">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  );

                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      target={
                        detail.href.startsWith("https") ? "_blank" : undefined
                      }
                      rel={
                        detail.href.startsWith("https")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  );
                })}

                <div className="p-7 sm:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E52300]">
                    Information to send
                  </p>

                  <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-600">
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-[#FF2800]" />
                      Patient’s name and age
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-[#FF2800]" />
                      Short description of symptoms
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-[#FF2800]" />
                      Hotel, villa or home address
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-[#FF2800]" />
                      Exact WhatsApp location
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-black/10 bg-white p-2 shadow-[0_-15px_40px_rgba(0,0,0,0.14)] md:hidden">
        <a
          href="tel:+905519354800"
          className="flex min-h-13 items-center justify-center gap-2 border-2 border-[#FF2800] bg-white font-black text-[#E52300]"
        >
          <Phone size={18} />
          Call Now
        </a>

        <a
          href="https://wa.me/905519354800"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-13 items-center justify-center gap-2 bg-[#FF2800] font-black text-white"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}