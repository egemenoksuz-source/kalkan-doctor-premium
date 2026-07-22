import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-red-950 pt-[7.45rem] text-white"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(120deg,#71000a_0%,#c50013_52%,#f51b2b_100%)]" />

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.20),transparent_28rem)]" />

      <div className="absolute -bottom-48 -right-32 -z-10 h-[38rem] w-[38rem] rounded-full border-[7rem] border-white/[0.05]" />

      <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/10 xl:block" />
      <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/10 xl:block" />

      <div className="container-premium relative grid min-h-[calc(100vh-7.45rem)] lg:grid-cols-[1.4fr_0.6fr]">
        <div className="flex flex-col justify-between border-white/15 py-14 lg:border-r lg:py-16 lg:pr-14">
          <div>
            <div className="mb-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-black uppercase tracking-[0.16em] text-red-100">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 bg-red-400" />
                English-speaking medical care
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={15} className="text-red-300" />
                Available 24/7
              </span>
            </div>

            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-red-300">
              Kalkan · Kaş · Patara · Kaputaş
            </p>

            <h1 className="max-w-5xl text-balance text-[clamp(3.4rem,8vw,7.6rem)] font-black leading-[0.86] tracking-[-0.075em]">
              The doctor
              <span className="block font-light italic text-red-200">
                comes to you.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-balance text-base font-medium leading-8 text-red-50/80 sm:text-lg lg:text-xl">
              Private medical assistance at your hotel, villa, holiday
              accommodation or home—delivered with clear English communication
              and professional care.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-16 items-center justify-center gap-4 bg-white px-7 py-4 font-black text-red-950 transition hover:bg-red-100"
              >
                Request a Doctor
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="tel:+905519354800"
                className="inline-flex min-h-16 items-center justify-center gap-3 border border-white/25 bg-white/5 px-7 py-4 font-black text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                <Phone size={19} className="text-red-300" />
                +90 551 935 48 00
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-black">24/7</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-red-200/70">
                Medical access
              </p>
            </div>

            <div>
              <p className="text-3xl font-black">4+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-red-200/70">
                Main service areas
              </p>
            </div>

            <div>
              <p className="text-3xl font-black">EN</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-red-200/70">
                Clear communication
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between border-t border-white/15 py-10 lg:border-t-0 lg:py-16 lg:pl-10">
          <div className="flex justify-between lg:block">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">
              Private medical service
            </p>

            <p className="mt-0 text-right text-6xl font-black text-white/8 lg:mt-3 lg:text-left lg:text-8xl">
              24
            </p>
          </div>

          <div className="my-10 space-y-6">
            <div className="border-b border-white/15 pb-5">
              <Check size={19} className="mb-3 text-red-300" />
              <h2 className="font-black">Hotel & Villa Visits</h2>
              <p className="mt-2 text-sm leading-6 text-red-100/65">
                Medical care without leaving your accommodation.
              </p>
            </div>

            <div className="border-b border-white/15 pb-5">
              <ShieldCheck size={19} className="mb-3 text-red-300" />
              <h2 className="font-black">Private & Confidential</h2>
              <p className="mt-2 text-sm leading-6 text-red-100/65">
                Respectful, discreet and patient-focused assistance.
              </p>
            </div>

            <div className="border-b border-white/15 pb-5">
              <MapPin size={19} className="mb-3 text-red-300" />
              <h2 className="font-black">Wide Local Coverage</h2>
              <p className="mt-2 text-sm leading-6 text-red-100/65">
                Kalkan, Kaş, Patara, Kaputaş and surrounding areas.
              </p>
            </div>
          </div>

          <a
            href="#patient-care"
            className="inline-flex items-center justify-between border-t border-white/15 pt-6 text-xs font-black uppercase tracking-[0.18em] text-red-200"
          >
            Explore medical care
            <span className="grid h-11 w-11 place-items-center border border-white/20">
              <ArrowDown size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
